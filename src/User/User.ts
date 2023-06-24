import { Person, MetricsValues } from './IUser'

export default class User {

    name: string
    weight: number
    height: number

    constructor({ name, weight, height }: Person) {
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

    bulkingCarbo(): MetricsValues {
        const min = Math.ceil(this.weight * 3)
        const max = Math.ceil(this.weight * 6)
        return [min, max]
    }

    bulkingProt(): MetricsValues {
        const min = Math.ceil(this.weight * 1.6)
        const max = Math.ceil(this.weight * 2.2)
        return [min, max]
    }

    bulkingFat(): MetricsValues {
        const min = Math.ceil(this.weight * 0.5)
        const max = Math.ceil(this.weight * 1.5)
        return [min, max]
    }

    cuttingCarbo(): MetricsValues {
        const min = Math.ceil(this.weight * 1.5)
        const max = Math.ceil(this.weight * 3)
        return [min, max]
    }

    cuttingProt(): MetricsValues {
        const min = Math.ceil(this.weight * 1.8)
        const max = Math.ceil(this.weight * 2.4)
        return [min, max]
    }

    cuttingFat(): MetricsValues {
        const min = Math.ceil(this.weight * 0.5)
        const max = Math.ceil(this.weight * 1.5)
        return [min, max]
    }

}