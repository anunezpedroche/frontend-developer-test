import { Provider } from "react-redux";
import { store } from "./stores";
import AppRouter from "./router";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Suspense>
  );
}

export default App;
