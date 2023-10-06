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
                <div className="account-nav">
                    <div className="account-btn-div"><button className="account-btn account-border-radius-left">Dashboard</button></div>
                    <div className="account-btn-div"><button className="account-btn">Profile</button></div>
                    <div className="account-btn-div"><button className="account-btn">Documents</button></div>
                    <div className="account-btn-div"><button className="account-btn account-border-radius-right">Upgrade</button></div>
                </div>
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