import { Provider } from "react-redux";
import HomePage from "./pages/home";
import { store } from "./stores";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
