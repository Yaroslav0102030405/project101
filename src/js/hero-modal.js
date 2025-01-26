const refsContainerButton2 = {
  //   containerRef: document.querySelector('.service__list'),
  openModalRef: document.querySelector('.js-button'),
  closeModalBtnRef: document.querySelector('.js-close-modal'),
  backdrop2Ref: document.querySelector('.js-backdrop-2'),
  //   modalTitle: document.querySelector('.js-modal-title'),
};

refsContainerButton2.openModalRef.addEventListener('click', onClickButton2);
refsContainerButton2.closeModalBtnRef.addEventListener('click', onCloseModal2);
refsContainerButton2.backdrop2Ref.addEventListener('click', onBackdropModal2);

function onClickButton2(e) {
  //   console.log(e);
  //   if (!e.target.classList.contains('js-button')) {
  //     return;
  //   }
  refsContainerButton2.backdrop2Ref.classList.remove('is-hidden-2');
  window.addEventListener('keydown', onEscKeyPress2);
  document.body.classList.add('show-modal');
  //   refsContainerButton.modalTitle.textContent = e.target.textContent;
}

function onCloseModal2() {
  refsContainerButton2.backdrop2Ref.classList.add('is-hidden-2');
  window.removeEventListener('keydown', onEscKeyPress2);
  document.body.classList.remove('show-modal');
}

function onBackdropModal2(event) {
  if (event.currentTarget === event.target) {
    onCloseModal2();
  }
}

function onEscKeyPress2(event) {
  if (event.code === 'Escape') {
    onCloseModal2();
  }
}
