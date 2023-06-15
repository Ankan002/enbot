import { AuthenticatedChecker } from "components/elements/authenticated-checker.jsx";
import LoginHero from "assets/images/login-hero.png";

export const ProfileScreen = () => {
	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-yellow">
			<AuthenticatedChecker />
			<div className="w-full h-screen flex flex-row-reverse">
				<img
					src={LoginHero}
					className="w-7/12 h-screen object-cover lg:block hidden border-2 border-black rounded-l-md"
					alt="LoginHero"
				/>
			</div>
		</main>
	);
};
