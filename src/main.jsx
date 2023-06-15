import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { getReactQueryClient } from "utils/get-react-query-client.js";
import "./globals.css";
import { QueryClientProvider } from "react-query";
import { router } from "./router.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PreviousAuthStateChecker } from "components/elements/previous-auth-state-checker.jsx";
import { RouterProvider } from "react-router-dom";
import { GetUserSubscriber } from "components/login/get-user-subscriber/get-user-subscriber.jsx";

const container = document.getElementById("root");
const rootElement = createRoot(container);

const queryClient = getReactQueryClient();

rootElement.render(
	<StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
					<PreviousAuthStateChecker />
					<GetUserSubscriber />
					<RouterProvider router={router} />
				</GoogleOAuthProvider>
			</QueryClientProvider>
		</RecoilRoot>
	</StrictMode>
);
