import { createContext } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {

    const [user, setUser] = props.userState;

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )

};