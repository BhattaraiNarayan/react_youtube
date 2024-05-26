import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from './utils/store';
import "./index.css";



const App = ()=> {
  return (
    <Provider store={store}>
      <div className="mx-8">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}
export default App;