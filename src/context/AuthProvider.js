import React, { useEffect, useState } from 'react';
import {auth} from '../firebase/config';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState({});
    const [isLoading,setLoading] = useState(true);
    const history = useHistory();

    useEffect(()=>{
        const unsubscibed = auth.onAuthStateChanged((user)=>{
            if (user){
                const {displayName,email,uid,photoURL} = user;
                setUser({displayName,email,uid,photoURL});
                setLoading(false);
                history.push('/');
            }else{
                setLoading(false);
                history.push('/');
            }
        });

        return ()=>{
            unsubscibed();
        }
    },[history]);
    

    return (
        <AuthContext.Provider value={{user}}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;