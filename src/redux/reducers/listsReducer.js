const initialState = {
    records: [],
};

export default function listsReducer(state = initialState, action) {
    switch (action.type) {
    case 'LISTS_SET_ACTIVE':
        state = { ...state, activeId: action.payload };
        break;
    case 'ADD_LIST':
        state = { ...state, records: [...state.records, action.payload] };
        break;

    case 'LISTS_REFRESH_FULFILLED':
        const records = action.payload.data.map((item) => {
            return {
                icon: item.icon,
                name: item.name,
                id: item.id,
            };
        });
        state = { ...state, records, activeId: state.activeId || records[0].id };
        break;
    }

    return state;
}
