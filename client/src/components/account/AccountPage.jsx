import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoginPage from "../auth/LoginPage";

function AccountPage () {
    const { loggedIn } = useContext(UserContext);

    const signedIn = () => {
        return (
            <div>
                <header>
                <img src='accountbanner.png' alt='accountbanner' className='account-banner'/>
                </header>
            </div>
        )
    }

    const signedOut = () => {
        return (
            <div>
                <LoginPage />
            </div>
        )
    }

    return (
        <div>
            {loggedIn ? signedIn() : signedOut()}
        </div>
    )
}

export default AccountPage;