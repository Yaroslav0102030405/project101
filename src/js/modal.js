// скрипт делегування щоб в контенере при натискі на будь яку кнопку відкривилося модалька
const refsContainerButton = {
  containerEl: document.querySelector('.js-modal'),
  backdrop: document.querySelector('.js-backdrop'),
};

refsContainerButton.containerEl.addEventListener('click', onClickButton);

function onClickButton(e) {
  if (!e.target.classList.contains('btn')) {
    return;
  }
  console.log(e.target);
  onCloseModal();
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  refsContainerButton.backdrop.classList.add('is-hidden');
}
