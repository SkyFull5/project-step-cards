export const useCallback = ({ callback, defaultCards, cards, paginationContainer, cardContainer, activeButton, status = '', urgency = '', title = '' }) => {
    if (!status && !urgency && !title) {
        callback({
            allCard: defaultCards,
            paginationContainer: paginationContainer,
            cardContainer: cardContainer,
            activeButton: activeButton,
        });
    } else {
        callback({
            allCard: cards,
            paginationContainer: paginationContainer,
            cardContainer: cardContainer,
            activeButton: activeButton,
        });
    }
};
