import React, { Suspense } from "react";
import { HeadProvider } from "react-head";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const AppProvider = ({children}) => {
  return (
    <Provider store={store}>
      <HeadProvider>
        <Suspense fallback={<h2>Loading...</h2>}>
            {children}
        </Suspense>
      </HeadProvider>
 </Provider>
  );
};

export default AppProvider;
