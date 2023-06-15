import axios, { AxiosError } from "axios";

/**
 *
 * @param {{
 *  name: string;
 *  email: string;
 *  provider_id: string;
 * }} args
 */
export const login = async (args) => {
	const { name, email, provider_id } = args;

	try {
		const response = await axios.post("https://enbot.sidhant.live:5001/users/login", {
			name,
			email,
			provider_id,
		});

		if (response.data.error) {
			throw new Error(response.data.error);
		}

		return {
			authToken: response.headers["auth-token"],
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response.data.error);
		}

		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw new Error("Internal Server Error!!");
	}
};
