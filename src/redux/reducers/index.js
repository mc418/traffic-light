
const reducers = (state='YELLOW', action) => {
    switch (action.type) {
        case 'STOP':
            return 'YELLOW';
        case 'GO':
            return 'RED';
        case 'CAUTION':
            return 'GREEN';
        default:
            return state;
    }
}

export default reducers;