import { defaultButton } from './icons-buttons'
import User from '../User/User'
import { SetUser } from '../IUser/UserState'
import { Button, SetShowLoader, Navigate, Account } from './Types'

const enterOrCreate = (user: Account, uri: string, setUser: SetUser, navigate: Navigate, 
    button: Button, setShowLoader: SetShowLoader) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    fetch(uri, options)
        .then(res => {
            if (res.status === 200) {
                res.json().then(doc => {
                    sessionStorage.setItem('user', JSON.stringify(doc))
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
        })
        .catch(err => alert(err))

}

export default enterOrCreate