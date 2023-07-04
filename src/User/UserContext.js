import { createContext } from 'react'

export const UserContext = createContext()

const UserProvider = (props) => {

    const { userState, children } = props

    const [user, setUser] = userState

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider