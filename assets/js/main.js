const main = async () => {
    const BOARD_PLAYER = document.getElementById('board');
    const LIST_BOARD = await getListBoard(20);
    BOARD_PLAYER.innerHTML = drawBoardPlayer(LIST_BOARD);
};

main();