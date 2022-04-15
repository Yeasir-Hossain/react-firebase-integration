import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>Home</h1>
            <p>Curent user is: {user? user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Home;