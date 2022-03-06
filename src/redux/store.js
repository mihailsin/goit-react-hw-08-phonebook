import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { filterSlice } from './filter-slice';
import { contactsApi } from './contactsApi';
import { userApi } from './userApi';
import { authSlice } from './authSlice';
// const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterSlice.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

const authPersistConfig = {
  key: 'auth',
  storage,
};

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userApi.reducerPath]: userApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    filter: filterSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    userApi.middleware,
  ],
});

const persistor = persistStore(store);

export { store, persistor };
