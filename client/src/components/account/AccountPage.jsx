import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LoginPage from "../auth/LoginPage";
import ProfilePage from "./ProfilePage";
import DashboardPage from "./DashboardPage";
import DocumentPage from "./DocumentPage";
import UpgradePage from "./UpgradePage";

function AccountPage () {
    const { loggedIn } = useContext(UserContext);
    const [openDiv, setOpenDiv] = useState('div2');

    const handleBtnClick = (divId) => {
        if (openDiv === divId) {
            setOpenDiv(divId);
        } else {
            setOpenDiv(divId);
        }
    };

    const signedIn = () => {
        return (
            <div className='account-page-div'>
                <header>
                <img src='accountbanner.png' alt='accountbanner' className='account-banner'/>
                </header>
                <div className="account-nav">
                    <div className="account-btn-div"><button className="account-btn account-border-radius-left" onClick={() => handleBtnClick('div1')}>Dashboard</button></div>
                    <div className="account-btn-div"><button className="account-btn" onClick={() => handleBtnClick('div2')}>Profile</button></div>
                    <div className="account-btn-div"><button className="account-btn" onClick={() => handleBtnClick('div3')}>Documents</button></div>
                    <div className="account-btn-div"><button className="account-btn account-border-radius-right" onClick={() => handleBtnClick('div4')}>Upgrade</button></div>
                </div>
                <br />
                <div className="account-middle-div">
                    <div style={{display: openDiv === 'div1' ? 'block' : 'none'}}><DashboardPage /></div>
                    <div style={{display: openDiv === 'div2' ? 'block' : 'none'}}><ProfilePage /></div>
                    <div style={{display: openDiv === 'div3' ? 'block' : 'none'}}><DocumentPage /></div>
                    <div style={{display: openDiv === 'div4' ? 'block' : 'none'}}><UpgradePage /></div>
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