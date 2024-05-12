import { Provider } from "react-redux";
import HomePage from "./pages/home";
import { store } from "./stores";
import AppRouter from "./router";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
