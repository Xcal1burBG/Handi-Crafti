import './Profile.css'

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-form-container">
                <form className="profile-form" action="#" method="post">

<p>Dear, username, here you can change your details</p>

                    {/* <div className="profile-photo">
                        <div className="profile-image">
                            <img className="avatar-image" src="../../avatar.jpg" alt="" />

                        </div>
                        <div className = "profile-photo-form">
                             <form action="/action_page.php">
                            <input type="file" id="myFile" name="filename"/>
                        </form>
                        </div>
                       

                    </div> */}



                    <label for="email">Change email</label>
                    <input type="text" className="profile-input" name="email" />

                    <label for="password">Change password</label>
                    <input type="password" className="profile-input" name="password" />

                    <label for="repass">Repeat password</label>
                    <input type="password" className="register-input" name="repass" />

                    <button id="profile-submit" type="submit">Save changes</button>
                </form>
            </div>
        </div>
    );
};