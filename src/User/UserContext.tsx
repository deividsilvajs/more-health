import React, { ReactNode, createContext, Dispatch, SetStateAction } from 'react'
import { User } from './IUser'

type UserState = [User, Dispatch<SetStateAction<User>>]

interface Props {
    userState: UserState
    children: ReactNode
}

export const UserContext = createContext<UserState | null>(null)

const UserProvider = (props: Props) => {

    const { userState, children } = props

    const [user, setUser] = userState

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider