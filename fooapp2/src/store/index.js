import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistCombineReducers } from 'redux-persist';
import{ toastReducer, authReducer, recordReducer} from './reducers';

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['auth',]
//   };
  
  const rootReducer = {
     
      toast: toastReducer,

  }   
  // const persistCombinedReducers = persistCombineReducers(persistConfig, rootReducer);


export const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
// export const persistor = persistStore(store)