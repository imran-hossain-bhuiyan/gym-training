import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [user, loading] =  useAuthState();
    const location = useLocation();
    return (
        <div>
            <h2>require auth</h2>
        </div>
    );
};

export default RequireAuth;