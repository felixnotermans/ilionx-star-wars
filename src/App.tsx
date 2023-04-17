import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./common/constants/routes";
import NavigationBarComponent from "./components/navigation-bar/navigation-bar.component";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
