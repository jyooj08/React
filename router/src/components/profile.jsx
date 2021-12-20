import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    let navigate = useNavigate();

    return <>
    <h1>Profile</h1>
    <button onClick={() => navigate('/home')}>Go to Home</button>
    </>
};

export default Profile;