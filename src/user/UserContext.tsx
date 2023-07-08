import React, { createContext, ReactNode } from 'react'
import { UserState } from '../types/user'
import { DEFAULT_USER } from '../user/user'

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