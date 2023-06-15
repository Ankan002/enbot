import LoginSection from "components/login/login-section/login-section.jsx";
import LoginHero from "../assets/images/login-hero.png";
import { UnauthenticatedChecker } from "components/elements/unauthenticated-checker.jsx";

export const LoginPage = () => {
	return (
		<main className="w-full min-h-screen flex flex-col bg-primary-yellow">
			<UnauthenticatedChecker />
			<div className="w-full h-screen flex flex-row-reverse">
				<img src={LoginHero} className="w-7/12 h-screen object-cover lg:block hidden border-2 border-black rounded-l-md" alt="LoginHero" />
				<LoginSection />
			</div>
		</main>
	);
};
