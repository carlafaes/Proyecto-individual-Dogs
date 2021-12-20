import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from '../reducer/indexReducer';
import thunk from 'redux-thunk';

const store= createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__())
);

export default store;