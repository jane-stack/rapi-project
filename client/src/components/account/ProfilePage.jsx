function ProfilePage () {

    return (
        <div className="account-middle-div">
            <div className="left-div">
                <h3 className="detail-title">Personal Details</h3>
                <div className="account-profile-section">
                    <div>
                        <img src="samplepic.JPEG" alt="profile" className="account-profile-image" />
                    </div>
                    <div className="account-profile-info">
                        <p className="account-text">Name</p>
                        <p>Sarah Brinestone</p>
                        <p className="account-text">Gender</p>
                        <p>Female</p>
                        <p className="account-text">Date of Birth</p>
                        <p>August 27th, 1999</p>
                        <p className="account-text">Nationality</p>
                        <p>Caucasian</p>
                    </div>
                </div>
                <br />
                <div className="account-profile-section">
                    <div className="account-profile-info">
                        <p className="blue-text">Address</p>
                        <p className="account-text">Address Line</p>
                        <p>1234 S Renton Ave</p>
                        <p className="account-text">City</p>
                        <p>Seattle</p>
                        <p className="account-text">State</p>
                        <p>Washington</p>
                        <p className="account-text">Country</p>
                        <p>USA</p>
                    </div>
                    <div className="account-profile-info">
                        <p className="blue-text">Contact Detail</p>
                        <p className="account-text">Phone Number</p>
                        <p>09034867656</p>
                        <p className="account-text">Email</p>
                        <p>SarahB1999@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right-div">
                <div className="right-div-1">
                    <h2>Overview</h2>
                    <p><strong>Pick-up date</strong></p>
                    <p>10-05-2023</p>
                    <p><strong>Pick-up location</strong></p>
                    <p>1234 S Walter ST. Aurora, CO 80015</p>
                    <p><strong>Drop-off location</strong></p>
                    <p>1234 S Walter ST. Aurora, CO 80015</p>
                </div>
                <div className="right-div-1">
                    <h2>Price Details</h2>
                    <p>Car rental fee per day</p>
                    <p>Deposit fee</p>
                    <p>Days rent</p>
                    <p>Taxes and fees</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;