import { authAtom } from "atoms/auth-atom.js";
import { userAtom } from "atoms/user-atom.js";
import { getUser } from "helpers/get-user.js";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const GetUserSubscriber = () => {
	const isAuthenticated = useRecoilValue(authAtom);
	const setUser = useSetRecoilState(userAtom);

	const { refetch: getUserQuery, isLoading: fetchingUser } = useQuery("get-user", getUser, {
		enabled: false,
		onSuccess: (data) => {
			setUser({
				id: data.id,
				email: data.email,
				provider_id: data.provider_id,
				name: data.name,
			});
		},
		onError: (e) => console.log(e),
		retry: 0,
	});

	useEffect(() => {
		if (isAuthenticated) {
			if (fetchingUser) return;
			getUserQuery();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return <></>;
};
