import { authAtom } from "atoms/auth-atom.js";
import { authLoaderAtom } from "atoms/auth-loader-atom.js";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

export const PreviousAuthStateChecker = () => {
	const isMounted = useRef(false);

	const setIsAuthenticated = useSetRecoilState(authAtom);
	const setIsPreviousAuthStateLoaded = useSetRecoilState(authLoaderAtom);

	useEffect(() => {
		if (window === undefined || isMounted.current) return;

		isMounted.current = true;
		const authToken = localStorage.getItem("auth-token");
		setIsPreviousAuthStateLoaded(true);
		if (authToken) {
			setIsAuthenticated(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
};
