const drawBoardPlayer = (list) => {
    let cards = `<div class="row">`;
    for (let i = 0; i < list.length; i ++) {
        cards += `<div class="col-3">
                    <div 
                        class="card mb-2 container__board--card border-0">
                        <img 
                            src="${(list[i].isDiscover) ? list[i].image : './assets/images/question_icon.png'}"
                            class="card-img-top"
                            alt="Image question">
                            <div 
                                class="card-body p-0 h-100 d-flex flex-column justify-content-center ">
                                ${(list[i].isDiscover) ? '<h5 class="card-title card--title">${list[i].value}</h5>' : ''}
                                <button class="btn button--main btn-sm">
                                    <i class="bi bi-eye-fill"></i>
                                    Ver
                                </button>
                          </div>
                    </div>
                </div>`; 
    }
    cards += `</div>`;
    return cards;
};