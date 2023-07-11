import { SetStateAction } from 'react'

export interface Person {
    email: string
    name: string
    weight: number
    height: number
}

type Metrics = () => number[]

export interface User extends Person {
    imc: () => string
    water: () => string
    bulkingCarbo: Metrics
    bulkingProt: Metrics
    bulkingFat: Metrics
    cuttingCarbo: Metrics
    cuttingProt: Metrics
    cuttingFat: Metrics
}

export type SetUser = React.Dispatch<SetStateAction<User>>

export type UserState = [User, SetUser]