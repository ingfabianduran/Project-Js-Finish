const drawBoardPlayer = () => {
    const BOARD_PLAYER = document.getElementById('board');
    const LIST_BOARD = JSON.parse(localStorage.getItem('board'));
    let cards = `<div class="row">`;
    for (let i = 0; i < LIST_BOARD.length; i ++) {
        cards += drawCard(LIST_BOARD[i], i);
    }
    cards += `</div>`;
    BOARD_PLAYER.innerHTML = cards;
};

const drawCard = (item, index, isTrack = false) => {
    const TEMPLATED_CARD = `<div class="col-3 d-flex justify-content-center mb-2">
        <div 
            class="card h-100 mb-2 container__board--card border-0">
            <img 
                src="${(item.isDiscover) ? item.image : './assets/images/question_white.png'}"
                class="card-img-top"
                alt="Image question">
            <div 
                class="card-body text-center">
                ${(item.isDiscover) ? `<h4 class="card-title card--title">${item.value}</h4>` : '<h4 class="card-title card--title">???</h4>'}
                ${(!isTrack) ? `<button 
                                    id="btnSeeElement" 
                                    data-id="${index}" 
                                    data-value="${item.value}" 
                                    class="btn button--main btn-lg" 
                                    ${item.isDiscover ? 'disabled' : ''}>
                                    Ver
                                </button>` : ''}
            </div>
        </div>
    </div>`;
    return TEMPLATED_CARD;
};