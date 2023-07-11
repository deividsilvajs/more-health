import { User } from '../types/user'

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