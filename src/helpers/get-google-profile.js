import axios, { AxiosError } from "axios";

/**
 * @param {{access_token: string}} args
 * @returns {{
 *  success: boolean;
 *  error?: string;
 *  user?: {
 *      email: string;
 *      email_verified: boolean;
 *		family_name: string;
 *		given_name: string;
 *		locale: string;
 *		name: string;
 *		picture: string;
 *		sub: string;
 *  }
 * }}
 */
export const getGoogleProfile = async (args) => {
	const { access_token } = args;

	try {
		const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});

		console.log(response.data);

		return {
			success: true,
			user: response.data,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			return {
				success: false,
				error: error.response?.data?.error,
			};
		}

		if (error instanceof Error) {
			return {
				success: false,
				error: error.message,
			};
		}

		return {
			success: false,
			error: "Internal Server Error!!",
		};
	}
};
