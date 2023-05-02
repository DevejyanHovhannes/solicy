import "./App.css";

import Layout from "./components/Layout";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";


function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
