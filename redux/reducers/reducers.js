import { combineReducers } from 'redux';
import { allRoomsReducer } from './roomReducers.JS';

const reducer = combineReducers({
    allRooms: allRoomsReducer,
});

export default reducer;
