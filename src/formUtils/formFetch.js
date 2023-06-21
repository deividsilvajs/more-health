import { defaultButton } from './icons-buttons'
import User from '../User/User'

export const formFetch = (res, navigate, button, setShowLoader, setUser) => {

    if (res.status === 200) {
        res.json().then(doc => {
            let { _id, __v,...user } = doc
            user.id = _id
            // Criando usuário que será usado em todo o programa
            user = new User(user)
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