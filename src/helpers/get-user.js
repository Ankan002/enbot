import axios, { AxiosError } from "axios";

export const getUser = async () => {
	try {
		const response = await axios.get("https://enbot.sidhant.live:5001/users/get-user", {
			headers: {
				"auth-token": localStorage.getItem("auth-token"),
			},
		});

		if (response.status === 401 || !response.data.user) {
			throw new Error("Access Denied!!");
		}

		return {
			name: response.data.user.name,
			id: response.data.user._id,
			email: response.data.user.email,
			provider_id: response.data.user.provider_id,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response.status === 401) {
				throw new Error("Access Denied!!");
			} else {
				throw new Error(error.response.data.error);
			}
		}

		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error!!");
	}
};
