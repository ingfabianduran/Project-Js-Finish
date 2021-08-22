const eventClickButton = () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.id == 'btnSeeElement') {
            const ID_BUTTON = parseInt(e.target.getAttribute('data-id'));
            let selectCount = localStorage.getItem('selectCount');
            selectCount ++;
            localStorage.setItem('selectCount', selectCount);
            const LIST_BOARD_PLAYER = setImageBoard(ID_BUTTON, selectCount);
            localStorage.setItem('board', JSON.stringify(LIST_BOARD_PLAYER));
            drawBoardPlayer();
        };
    });
};

const saveElementObject = (selectCount, indice) => {
    if (selectCount === 1) {
        localStorage.setItem('index1', indice);
    } else if (selectCount === 2) {
        localStorage.setItem('index2', indice);
    }
};

const setImageBoard = (indice, selectCount) => {
    let boardPlayer = JSON.parse(localStorage.getItem('board'));
    saveElementObject(selectCount, indice);
    boardPlayer[indice].isDiscover = true;
    if (selectCount === 2) {
        boardPlayer = compareItemsSelect(localStorage.getItem('index1'), localStorage.getItem('index2'));
        localStorage.setItem('selectCount', 0);
        return boardPlayer;
    }
    return boardPlayer;
};

const showNotification = (icon, title) => {
    const TOAST = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
      
    TOAST.fire({
        icon: icon,
        title: title
    });
};

const compareItemsSelect = (indice1, indice2) => {
    let boardPlayer = JSON.parse(localStorage.getItem('board'));

    if (boardPlayer[indice1].value === boardPlayer[indice2].value) {
        boardPlayer[indice1].isDiscover = true;
        boardPlayer[indice2].isDiscover = true;
        localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);
        if (validateIsWin(boardPlayer.length / 2)) {
            showNotification('success', `Felicitaciones!!! ${localStorage.getItem('namePlayer')} Completaste el juego`);
        } else {
            showNotification('success', 'Adivinaste!!! Felicidades :)')
        }
    } else {
        boardPlayer[indice2].isDiscover = true;
        const TRACK = document.getElementById('track');
        TRACK.innerHTML = drawCard(boardPlayer[indice2], indice2, true);
        showNotification('error', 'Opssss!!! Mala decision :(');
        boardPlayer[indice1].isDiscover = false;
        boardPlayer[indice2].isDiscover = false;
    }
    return boardPlayer;
};

const validateIsWin = (limitScore) => {
    if (parseInt(localStorage.getItem('score')) === limitScore) {
        return true;
    }
    return false;
};