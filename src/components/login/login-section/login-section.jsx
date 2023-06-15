import { LoginButton } from "../elements/login-button.jsx";
import MainAppLogo from "assets/images/main-logo.png"

const LoginSection = () => {
    return (
        <div className="h-full flex-1 flex flex-col items-center justify-center p-5">
            <img src={MainAppLogo} alt="Main Logo" className="w-96 h-40 object-contain" />
            
            <h1 className="text-4xl font-quicksand tracking-widest font-bold mt-14">
                WELCOME !
            </h1>
            <p className="mt-5 text-center text-xl font-fira-code tracking-widest">
                {"Let's"} login to the world of scientific magic
            </p>
            <LoginButton />
        </div>
    );
};

export default LoginSection;
