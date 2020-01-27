import { createStore, combineReducers } from 'redux';

// reducers
import ui from './reducers/ui.reducer';

const reducer = combineReducers({
    ui
});

const store = createStore(reducer);

export default store;