import React, { useState } from 'react';

import * as admin from 'src/dummy';

interface UserContextType {
    isAuthenticated: boolean;
    sessionData: SessionData | null;
    login: (userId: string, password: string) => Promise<boolean>;
}

export const UserContext = React.createContext<UserContextType | null>(null);

interface UserProviderProps {
    children?: React.ReactNode;
}

export function UserProvider(props: UserProviderProps) {
    // const [sessionData, setSessionData] = useState<SessionData | null>(null);
    // Bypassing the login phase by setting default session data as admin
    const [sessionData, setSessionData] = useState<SessionData | null>(admin.sessionData);

    const login = async (userId: string, password: string) => {
        // Login Logic goes here....
        if (userId == 'admin') {
            setSessionData(admin.sessionData);
            return true;
        }
        return false;
    };

    return (
        <UserContext.Provider
            value={{
                isAuthenticated: Boolean(sessionData),
                sessionData: sessionData,
                login: login
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export const UserConsumer = UserContext.Consumer;
