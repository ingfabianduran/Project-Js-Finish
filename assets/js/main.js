const main = async () => {
    const BOARD_PLAYER = document.getElementById('board');
    const LIST_BOARD = await getListBoard(12);
    BOARD_PLAYER.innerHTML = drawBoardPlayer(LIST_BOARD);
};

main();