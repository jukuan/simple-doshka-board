// reducer.js
export default (
    state = {
        byId: {},
        todo: [],
        working: [],
        done: []
    },
    action
) => {
    const { byId } = state;
    const { card, dragId, dropId } = action;
    switch (action.type) {
        case 'SWAP_CARD':
            const columnName = byId[dropId].column
            let column = [ ...state[columnName]]
            const curIndex = column.indexOf(dragId)
            const newIndex = column.indexOf(dropId)
            const item = column.splice(curIndex, 1)
            column = column.slice(0, newIndex).concat(item).concat(column.slice(newIndex))
            return {
                ...state,
                [columnName]: column
            }
        case 'CHANGE_CARD_COLUMN':
            return {
                ...state,
                byId: {
                    ...byId,
                    [card.id]: {
                        ...byId[card.id],
                        column: card.column
                    }
                },
                [byId[card.id].column]: state[byId[card.id].column].filter(id => id !== card.id),
                [card.column]: [...state[card.column], card.id]
            }
        case 'NEW_CARD':
            return {
                ...state,
                byId: {
                    ...byId,
                    [card.id]: card
                },
                [card.column]: [...state[card.column], card.id]
            }
        default:
            return state;
    }
}
