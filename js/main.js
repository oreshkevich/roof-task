const navActive = document.querySelector('.nav-active');
const hamburger = document.querySelector('.hamburger');
const navActiveItem = document.querySelector('.nav-active-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navActive.classList.toggle('vigorously');
  navActiveItem.classList.toggle('vigorously-item');
});

const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (event) => {
  const target = event.target;
  if (
    target.classList.contains('overlay') ||
    target.classList.contains('modal__close')
  ) {
    modal.classList.add('hidden');
  }
});

const form = document.querySelector('.form');
const checkbox = document.querySelector('.checkbox');
const formUrl = 'https://jsonplaceholder.typicode.com/posts';
form.addEventListener('submit', (event) => {
  const formData = {};

  event.preventDefault();

  if (!checkbox.checked) {
    alert('Cогласитесь с условиями !');
  } else {
    fetch(formUrl, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((formData) => {
        console.log(formData);
        alert('Данные успешно сохранены!');
        form.reset();
      })
      .catch((error) => {
        alert('произошла ошибка, статус' + error.message);
      });
  }
});

const imgPlus = document.querySelector('.img-plus');
const activeCard = document.querySelector('.card__item-hidden');

imgPlus.addEventListener('click', () => {
  activeCard.classList.toggle('active-card');
  imgPlus.classList.toggle('img-plus-active');
});
