import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/HomePage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import ChatPage from "./routes/chatpage/ChatPage";
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import SigninPage from "./routes/signinPage/SigninPage";
import SignupPage from "./routes/signupPage/SignupPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SigninPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignupPage />,
      },
      {
        path: "/dashboard", 
        element: <DashboardLayout />,
        children: [
          {
            index: true, 
            element: <DashboardPage />,
          },
          {
            path: "chats/:id", 
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
