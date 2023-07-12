import { User, Person } from '../types/user'

export const weightFormat = (weight: string) => {
    if (weight.includes(',')) {
        return parseFloat(weight.replace(',', '.'))
    } else {
        return parseFloat(weight)
    }
}

export const heightFormat = (height: string, user: User) => {
    if (height.includes(',') || height.includes('.')) {
        setTimeout(() => {
            alert('A altura precisa ser em centímetros (Ex: 170cm)')
        }, 100)
        return user.height
    } else {
        return Number(height)
    }
}

const updateUser = (user: User, name: string, weight: string, height: string) => {

    const account = {} as Person
    
    account.email = user.email
    name ? account.name = name : account.name = user.name
    weight ? account.weight = weightFormat(weight) : account.weight = user.weight
    height ? account.height = heightFormat(height, user) : account.height = user.height

    return account

}

export default updateUser