import { authAtom } from "atoms/auth-atom.js";
import { authLoaderAtom } from "atoms/auth-loader-atom.js";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const AuthenticatedChecker = () => {
	const isAuthenticated = useRecoilValue(authAtom);
    const isPreviousAuthStateLoaded = useRecoilValue(authLoaderAtom);

	useEffect(() => {
		if (isPreviousAuthStateLoaded && !isAuthenticated && window !== undefined) {
			window.location.href = "/login";
		}
	}, [isAuthenticated, isPreviousAuthStateLoaded]);

	return <></>;
};
