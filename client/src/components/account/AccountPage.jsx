import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoginPage from "../auth/LoginPage";

function AccountPage () {
    const { loggedIn } = useContext(UserContext);

    const signedIn = () => {
        return (
            <div>
                <h3>Account Page : Welcome User</h3>
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