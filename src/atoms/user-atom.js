import { atom } from "recoil";

export const userAtom = atom({
	key: "userAtom",
	default: {
		id: "1",
		name: "Ankan Bhattacharya",
		email: "ankanbhattacharya89@gmail.com",
	},
});
