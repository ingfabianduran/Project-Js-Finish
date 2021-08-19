const getInformationCharacter = async(id) => {
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getListBoard = async(dificulty) => {
    let listBoard = [];
    let contador = 0;

    while (contador < (dificulty / 2)) {
        try {
            const RANDOM_NUMBER = Math.floor(Math.random() * (671 - 1) + 1);
            const CHARACTER = await getInformationCharacter(RANDOM_NUMBER);
            const INFORMATION_BOARD = {
                value: CHARACTER.name,
                image: CHARACTER.image,
                isDiscover: false
            };
            listBoard.push(INFORMATION_BOARD);
            contador ++;
        } catch (error) {
            console.error(error);
        }
        
    }
    const listRandomElement = getListRandomElement(listBoard, dificulty);
    return listRandomElement;
};

const getListRandomElement = (listBoard, dificulty) => {
    let listRandomElement = listBoard;
    let contador = 0;
    
    while (contador < (dificulty / 2)) {
        const MIN = (dificulty / 2) - 1;
        const RANDOM_NUMBER = Math.floor(Math.random() * (dificulty - MIN) + MIN);
        if (listRandomElement[RANDOM_NUMBER] === undefined) {
            listRandomElement[RANDOM_NUMBER] = listRandomElement[contador];
            contador ++;
        }
    }
    return listRandomElement;
}