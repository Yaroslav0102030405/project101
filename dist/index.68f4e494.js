const refsContainerButton2 = {
    containerEl: document.querySelector('body'),
    openModal: document.querySelector('.js-button'),
    closeModalBtn: document.querySelector('.js-close-modal'),
    backdrop2: document.querySelector('.js-backdrop-2')
};
refsContainerButton2.containerEl.addEventListener('click', onClickButton2);
refsContainerButton2.closeModalBtn.addEventListener('click', onCloseModal2);
refsContainerButton2.backdrop2.addEventListener('click', onBackdropModal2);
function onClickButton2(e) {
    console.log(e);
    if (!e.target.classList.contains('js-button')) return;
    refsContainerButton2.backdrop2.classList.remove('is-hidden-2');
    window.addEventListener('keydown', onEscKeyPress2);
    document.body.classList.add('show-modal');
//   refsContainerButton.modalTitle.textContent = e.target.textContent;
}
function onCloseModal2() {
    refsContainerButton2.backdrop2.classList.add('is-hidden-2');
    window.removeEventListener('keydown', onEscKeyPress2);
    document.body.classList.remove('show-modal');
}
function onBackdropModal2(event) {
    if (event.currentTarget === event.target) onCloseModal2();
}
function onEscKeyPress2(event) {
    if (event.code === 'Escape') onCloseModal2();
}

//# sourceMappingURL=index.68f4e494.js.map
