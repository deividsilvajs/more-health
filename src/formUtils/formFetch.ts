import { defaultButton, Button, SetShowLoader, SetUser } from './icons-buttons'
import User from '../User/User'
import { Person } from '../User/IUser'

interface Res {
    status: number
    json: () => Promise<Person>
    text: () => Promise<string>
}

type Navigate = (path: string) => void

export const formFetch = (res: Res, navigate: Navigate, button: Button, setShowLoader: SetShowLoader, setUser: SetUser) => {

    if (res.status === 200) {
        res.json().then((doc: Person) => {
            // Criando usuário que será usado em todo o programa
            const user = new User(doc)
            setUser(user)
            navigate('/userPage')
        })
    } else {
        setTimeout(() => {
            res.text().then((text: string) => {
                alert(text)
                defaultButton(button, setShowLoader)
            })
        }, 500)
    }

}