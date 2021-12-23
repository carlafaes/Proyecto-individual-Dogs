import {createStore, applyMiddleware,compose} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducer/indexReducer';
import thunk from 'redux-thunk';

const store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;