import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import counterReducer from './store/reducer/counter'; //'./store/counter';
import resultReducer from './store/reducer/result';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr : counterReducer,
    res : resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[MiddleWare] Dispatching',action);
            const result = next(action);
            console.log('[MiddleWare] next state',store.getState());
            return result;
        }

    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,ReduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
