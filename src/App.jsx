//import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import "./index.css";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/react_youtube/",
    element: <Body />,
    children: [
      {
        path: "/react_youtube/",
        element: <MainContainer />,
      },
      {
        path: "/react_youtube/watch",
        element: <WatchPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <Provider store={store}>
      <div className="mx-8">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};
export default App;
