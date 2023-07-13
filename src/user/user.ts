import { Person, User as IUser } from '../types/user'

class User implements IUser {

    id: string
    name: string
    weight: number
    height: number

    constructor({ id, name, weight, height }: Person) {
        this.id = id
        this.name = name
        this.weight = weight
        this.height = height
    }

    imc() {
        // Transformando cm em m
        const height = this.height / 100
        const imc = (this.weight / (height * height)).toFixed(1)
        return imc
    }

    water() {
        return (Math.ceil(this.weight * 35) / 1000).toFixed(3)
    }

    bulkingCarbo() {
        const min = Math.ceil(this.weight * 3)
        const max = Math.ceil(this.weight * 6)
        return [min, max]
    }

    bulkingProt() {
        const min = Math.ceil(this.weight * 1.6)
        const max = Math.ceil(this.weight * 2.2)
        return [min, max]
    }

    bulkingFat() {
        const min = Math.ceil(this.weight * 0.5)
        const max = Math.ceil(this.weight * 1.5)
        return [min, max]
    }

    cuttingCarbo() {
        const min = Math.ceil(this.weight * 1.5)
        const max = Math.ceil(this.weight * 3)
        return [min, max]
    }

    cuttingProt() {
        const min = Math.ceil(this.weight * 1.8)
        const max = Math.ceil(this.weight * 2.4)
        return [min, max]
    }

    cuttingFat() {
        const min = Math.ceil(this.weight * 0.5)
        const max = Math.ceil(this.weight * 1.5)
        return [min, max]
    }

}

export const DEFAULT_USER = new User({ id: '', name: '', weight: 0, height: 0 })

export default User