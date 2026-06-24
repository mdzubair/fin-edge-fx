// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { HelmetProvider } from "react-helmet-async";

// import RouteComponent from "./routes/RouteComponent";
// import { store, persistor } from "./redux/store";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <HelmetProvider>
//           <RouteComponent />
//         </HelmetProvider>
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );

import "./api/interceptor.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

import RouteComponent from "./routes/RouteComponent";
import { store, persistor } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading...</div>}
        persistor={persistor}
      >
        <HelmetProvider>
          <RouteComponent />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);