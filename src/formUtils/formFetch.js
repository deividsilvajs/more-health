import { defaultButton } from './icons-buttons'

export const formFetch = (res, navigate, button, setShowLoader, setUser) => {

    if (res.status === 200) {
        res.json().then(doc => {
            let { _id, __v,...user } = doc
            user.id = _id
            setUser(user)
            // navigate(`/userPage/${id}`)
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