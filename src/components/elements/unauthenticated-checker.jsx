import { authAtom } from "atoms/auth-atom.js";
import { authLoaderAtom } from "atoms/auth-loader-atom.js";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const UnauthenticatedChecker = () => {
	const isPreviousAuthStateLoaded = useRecoilValue(authLoaderAtom);
	const isAuthenticated = useRecoilValue(authAtom);

	useEffect(() => {
		if (isPreviousAuthStateLoaded && isAuthenticated && window !== undefined) {
			window.location.href = "/";
		}
	}, [isPreviousAuthStateLoaded, isAuthenticated]);

	return <></>;
};
