import { useGoogleLogin } from "@react-oauth/google";
import GoogleImage from "assets/images/google-logo.png";
import { authAtom } from "atoms/auth-atom.js";
import { getGoogleProfile } from "helpers/get-google-profile.js";
import { login } from "helpers/login.js";
import { useState } from "react";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";

export const LoginButton = () => {
	const setIsAuthenticated = useSetRecoilState(authAtom);
	const [isFetchingGoogleData, setIsFetchingGoogleData] = useState(false);

	const { mutate: loginMutation, loading: isLoggingIn } = useMutation("login-mutation", login, {
		onError: (e) => console.log(e),
		onSuccess: (data) => {
			console.log(data.authToken);
			localStorage.setItem("auth-token", data.authToken);
			setIsAuthenticated(true);
		},
		retry: 0,
	});

	const googleLogin = useGoogleLogin({
		onSuccess: async (token) => {
			if (isLoggingIn || isFetchingGoogleData) return;

			setIsFetchingGoogleData(true);
			console.log(token.access_token);
			const response = await getGoogleProfile({
				access_token: token.access_token,
			});

			if (!response.success) {
				console.log(response.error);
				setIsFetchingGoogleData(false);
				return;
			}

			console.log(response.user);
			setIsFetchingGoogleData(false);

			loginMutation({
				name: response.user.name,
				email: response.user.email,
				provider_id: response.user.sub,
			});
		},
	});

	const onLoginButtonClick = () => {
		googleLogin();
	};

	return (
		<button
			className="px-5 py-1 border-2 border-black rounded-md flex items-center justify-center mt-10 hover:shadow-md hover:shadow-black/40"
			aria-label="Login Button"
			onClick={onLoginButtonClick}
		>
			<img src={GoogleImage} className="w-6 h-6 object-contain" alt="GoogleImage" />
			<p className="ml-4 font-quicksand text-lg font-bold tracking-wider">Continue with Google</p>
		</button>
	);
};
