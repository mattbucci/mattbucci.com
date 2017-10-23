import { combineReducers } from 'redux';

const DefaultState = function() {
    return {};
}();

const RootReducer = (state = DefaultState, action) => {
    return state;
}

export default combineReducers({
    RootReducer
});