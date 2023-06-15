import { ChatScreen } from "pages/chat.jsx";
import { HomePage } from "pages/home.jsx";
import { LoginPage } from "pages/login.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/login",
		element: <LoginPage />
	},
	{
		path: "/chat",
		element: <ChatScreen />
	}
])
