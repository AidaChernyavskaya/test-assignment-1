const createCard = (cardObj, containerID, cardName) => {
    const cardsContainer = document.getElementById(containerID);

    const card = document.createElement('div');
    card.classList.add('card', cardName);

    const label = document.createElement('div');
    label.classList.add('label', `label__${cardObj.color}`);
    if (cardObj.color === 'yellow') {
        const labelImg = document.createElement('img');
        labelImg.src = cardObj.label;
        label.appendChild(labelImg);
    } else {
        const labelText = document.createElement('p');
        labelText.classList.add('text__white');
        labelText.innerHTML = cardObj.label;
        label.appendChild(labelText);
    }

    const img = document.createElement('img');
    img.src = cardObj.img;
    img.classList.add('card__photo');

    const name = document.createElement('h3');
    name.innerHTML = cardObj.name;
    name.classList.add('card__name');

    const prices = document.createElement('div');
    prices.classList.add('card__price');
    const priceText = document.createElement('p');
    priceText.classList.add('text__black');
    priceText.innerHTML = 'Цена:';
    const priceOnSale = document.createElement('h2');
    priceOnSale.classList.add('h2__lowerCase');
    priceOnSale.innerHTML = cardObj.priceOnSale;
    const price = document.createElement('p');
    price.classList.add('text__crossed');
    price.innerHTML = cardObj.price;
    prices.appendChild(priceText);
    prices.appendChild(priceOnSale);
    prices.appendChild(price);

    const buttons = document.createElement('div');
    buttons.classList.add('card__buttons');
    const buttonBuy = document.createElement('button');
    buttonBuy.classList.add('card__buttons_buy');
    const buttonImg = document.createElement('img');
    buttonImg.classList.add('card__buttons_img');
    buttonImg.src = "images/cart.svg";
    buttonBuy.appendChild(buttonImg);
    const buttonText = document.createElement('p');
    buttonText.innerHTML = 'Купить';
    buttonBuy.appendChild(buttonText);
    const buttonMore = document.createElement('a');
    buttonMore.classList.add('card__buttons_more');
    buttonMore.href = '';
    buttonMore.innerHTML = 'Подробнее';
    buttons.appendChild(buttonBuy);
    buttons.appendChild(buttonMore);

    card.appendChild(label);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(prices);
    card.appendChild(buttons);
    cardsContainer.appendChild(card);
};

const drawSaleCards = () => {
    saleCards.forEach((card) => {
        createCard(card, 'sale__cards', 'card__sale');
    })
};

const drawNoveltyCards = () => {
    noveltyCards.forEach((card) => {
        createCard(card, 'novelty__cards', 'card__novelty');
    })
};

const drawRecommendationsCards = () => {
    recommendationCards.forEach((card) => {
        createCard(card, 'recommendation__cards', 'card__recommendation');
    })
};

drawSaleCards();
drawNoveltyCards();
drawRecommendationsCards();