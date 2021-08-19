const drawBoardPlayer = (list) => {
    let cards = `<div class="row">`;
    for (let i = 0; i < list.length; i ++) {
        cards += `<div class="col-3">
                    <div 
                        class="card mb-2 container__board--card">
                        <img 
                            src="${(list[i].isDiscover) ? list[i].image : './assets/images/question_icon.png'}"
                            class="container__board--images"
                            alt="Image question">
                    </div>
                </div>`; 
    }
    cards += `</div>`;
    return cards;
};