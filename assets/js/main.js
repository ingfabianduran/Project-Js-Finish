const submitForm = () => {
    const FORM_PLAYER = document.getElementById('formPlayer');
    const MODAL_FORM = new bootstrap.Modal(document.getElementById('formModal'), {
        backdrop: 'static',
        keyboard: false
    });
    MODAL_FORM.show();
    FORM_PLAYER.addEventListener('submit', (e) => {
        e.preventDefault();
        const FORM_DATA = new FormData(FORM_PLAYER);
        const BUTTON_SUBMIT = document.getElementById('buttonSubmit');
        const LEVEL = parseInt(FORM_DATA.get('dificulty'));
        BUTTON_SUBMIT.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
        localStorage.setItem('namePlayer', FORM_DATA.get('namePlayer'));
        localStorage.setItem('selectCount', 0);
        localStorage.setItem('score', 0);
        setTimeout(() => {
            MODAL_FORM.hide();
            initPlayer(LEVEL);
        }, 3000);
    });
}; 

const initPlayer = async (dificulty) => {
    const LIST_BOARD = await getListBoard(dificulty);
    const BOARD_PLAYER = document.getElementById('board');
    BOARD_PLAYER.classList.remove('d-none');
    localStorage.setItem('board', JSON.stringify(LIST_BOARD));
    drawBoardPlayer();
};

submitForm();
eventClickButton();