const createPromotionCard = (cardObj) => {
    const cardsContainer = document.getElementById('promotion__cards');

    const card = document.createElement('div');
    card.classList.add('card', 'card__promotion');

    const name = document.createElement('h3');
    name.innerHTML = cardObj.promotionName;
    name.classList.add('card__name');

    const img = document.createElement('img');
    img.src = cardObj.photoSrc;
    img.classList.add('card__photo');

    const text = document.createElement('p');
    text.classList.add('text__black', 'card__text');
    text.innerHTML = cardObj.text;

    const validityContainer = document.createElement('div');
    validityContainer.classList.add('validity');
    const validityText = document.createElement('p');
    validityText.classList.add('text__black');
    validityText.innerHTML = 'Срок действия:';
    const validityImg = document.createElement('div');
    validityImg.classList.add('validity__img');
    validityContainer.appendChild(validityText);
    validityContainer.appendChild(validityImg);

    const timer = document.createElement('div');
    timer.classList.add('timer__text');
    const days = document.createElement('p');
    days.classList.add('days');
    days.innerHTML = 'дней';
    const hours = document.createElement('p');
    hours.classList.add('hours');
    hours.innerHTML = 'часов';
    const minutes = document.createElement('p');
    minutes.classList.add('minutes');
    minutes.innerHTML = 'минут';
    timer.appendChild(days);
    timer.appendChild(hours);
    timer.appendChild(minutes);

    const buttonMore = document.createElement('a');
    buttonMore.classList.add('card__buttons_more');
    buttonMore.href = '';
    buttonMore.innerHTML = 'Подробнее';

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(text);
    card.appendChild(validityContainer);
    card.appendChild(timer);
    card.appendChild(buttonMore);
    cardsContainer.appendChild(card);
};

const drawPromotionCards = () => {
    promotionCards.forEach((card) => {
        createPromotionCard(card);
    })
};

drawPromotionCards();