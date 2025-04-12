import { fetchAPI } from "./api";

export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'update_times':
            return fetchAPI(new Date(action.newDate));
        default:
            return state;
    }
}

export const initializeTimes = () => {
    return fetchAPI(new Date());
}