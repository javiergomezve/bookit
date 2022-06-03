import { combineReducers } from 'redux';
import { allRoomsReducer, roomDetailReducer } from './roomReducers.js';

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetail: roomDetailReducer,
});

export default reducer;
