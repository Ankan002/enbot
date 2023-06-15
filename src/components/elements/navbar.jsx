import { Link, useNavigate } from "react-router-dom";
import LongLogo from "assets/images/long-logo.png";
import { useRecoilValue } from "recoil";
import { userAtom } from "atoms/user-atom.js";

export const Navbar = () => {
	const user = useRecoilValue(userAtom);
	const navigate = useNavigate();

	const onProfileClick = () => {
		navigate("/", {
			replace: true,
		});
	};

	return (
		<nav className="w-screen h-14 fixed px-5 bg-white top-0 left-0 flex items-center justify-between border-b-2 border-b-black">
			<Link to="/" className="border-r-2 border-r-black">
				<img src={LongLogo} className="w-24 h-14 object-contain" alt="logo" />
			</Link>

			{user && (
				<button
					className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black"
					onClick={onProfileClick}
				>
					<img
						src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.email}`}
						className="w-10 h-10 object-contain rounded-full"
						alt="profile-logo"
					/>
				</button>
			)}
		</nav>
	);
};
