import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const navigation = createReactNavigationReduxMiddleware(
    //'root',
    state => state.navigation
)

const store = createStore(persistedReducer,
    applyMiddleware(logger, navigation, thunk)
)
const persistor = persistStore(store)

// export const store, persistor
export { store, persistor }