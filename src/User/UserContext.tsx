import React, { createContext, ReactNode } from 'react'
import { UserState } from '../IUser/UserState'
import { DEFAULT_USER } from '../User/User'

export const UserContext = createContext<UserState>([DEFAULT_USER, () => {}])

interface Props {
    userState: UserState
    children: ReactNode
}

const UserProvider = ({ userState, children }: Props) => {

    const [user, setUser] = userState

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider