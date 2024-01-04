import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { UserProvider } from "./context/ToggleContext";
import Message from "./components/Message";
import Body from "./components/Body";
import Home from "./components/Home";
import { ComposeProvider } from "./context/ComposeContext";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Message />,
      },
    ],
  },
]);

function App() {
  document.title = "Gmail-Clone";
  return (
    <UserProvider>
      <ComposeProvider>
        <Header />
        <RouterProvider router={appRouter} />
      </ComposeProvider>
    </UserProvider>
  );
}

export default App;
