import "./App.css";
import { Provider } from "react-redux";
import { store } from "./stores/posts/store.config";
import HomePage from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
