import { defaultButton } from './icons-buttons'
import User from '../User/User'

export const formFetch = (res, navigate, button, setShowLoader, setUser) => {

    if (res.status === 200) {
        res.json().then(doc => {
            // Criando usuário que será usado em todo o programa
            const user = new User(doc)
            setUser(user)
            navigate('/userPage')
        })
    } else {
        setTimeout(() => {
            res.text().then(text => {
                alert(text)
                defaultButton(button, setShowLoader)
            })
        }, 500)
    }

}