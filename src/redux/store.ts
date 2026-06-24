
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import createWebStorage from "redux-persist/es/storage/createWebStorage";

// // Reducers
// import authReducer from "./slice/auth";
// import userReducer from "./slice/user";
// import depositReducer from "./slice/deposit";
// import accountReducer from "./slice/account";
// import tradeSettlementReducer from "./slice/trade-settlement";
// import withdrawReducer from "./slice/withdraw";
// import offerReducer from "./slice/offer";
// import ticketReducer from "./slice/ticket";
// import ticketReplyReducer from "./slice/ticket-replies";
// import currencyReducer from "./slice/currency";

// /**
//  * Fix for SSR / Vite environments
//  */
// const createNoopStorage = () => {
//   return {
//     getItem(_key: string) {
//       return Promise.resolve(null);
//     },
//     setItem(_key: string, value: string) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key: string) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();

// /**
//  * Root Reducer
//  */
// const rootReducer = combineReducers({
//   auth: authReducer,
//   users: userReducer,
//   deposit: depositReducer,
//   account: accountReducer,
//   tradeSettlement: tradeSettlementReducer,
//   withdraw: withdrawReducer,
//   offer: offerReducer,
//   ticket: ticketReducer,
//   tickeReply: ticketReplyReducer,
//   currency: currencyReducer,
// });

// /**
//  * Persist Configuration
//  */
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth", "currency"], // persist only auth slice
// };

// /**
//  * Persisted Reducer
//  */
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// /**
//  * Store
//  */
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//         ],
//       },
//     }),
//   devTools: import.meta.env.DEV,
// });

// /**
//  * Persistor
//  */
// export const persistor = persistStore(store);

// /**
//  * Types
//  */
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

// Reducers
import authReducer from "./slice/auth";
import userReducer from "./slice/user";
import depositReducer from "./slice/deposit";
import accountReducer from "./slice/account";
import tradeSettlementReducer from "./slice/trade-settlement";
import withdrawReducer from "./slice/withdraw";
import offerReducer from "./slice/offer";
import ticketReducer from "./slice/ticket";
import ticketReplyReducer from "./slice/ticket-replies";
import currencyReducer from "./slice/currency";

/**
 * SSR-safe storage
 */
const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: string) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

/**
 * Root Reducer
 */
const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  deposit: depositReducer,
  account: accountReducer,
  tradeSettlement: tradeSettlementReducer,
  withdraw: withdrawReducer,
  offer: offerReducer,
  ticket: ticketReducer,
  ticketReply: ticketReplyReducer, // fixed typo
  currency: currencyReducer,
});

/**
 * Persist Config
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "currency"],
};

/**
 * Persisted Reducer
 */
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

/**
 * Store
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
  devTools: import.meta.env.DEV,
});

/**
 * Persistor
 */
export const persistor = persistStore(store);

/**
 * Types
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;