import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const { user, setUser} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
           { user ? <p>Welcome, {user.name} </p> : <p> See Trending Posts</p>}
        </div>
    );
};

export default Home;