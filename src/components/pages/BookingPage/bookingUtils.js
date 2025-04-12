export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'update_times':
            const date = action.newDate;
            // ...
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        default:
            return state;
    }
}

export const initializeTimes = () => {
    return [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]
}