import { Dispatch, SetStateAction } from 'react'

export type UserState = [User, Dispatch<SetStateAction<User>>]

export type MetricsValues = [number, number]

export interface Person {
    name: string
    weight: number
    height: number
}

export interface User extends Person {
    imc: () => string;
    water: () => string;
    bulkingCarbo: () => MetricsValues
    bulkingProt: () => MetricsValues
    bulkingFat: () => MetricsValues
    cuttingCarbo: () => MetricsValues
    cuttingProt: () => MetricsValues
    cuttingFat: () => MetricsValues
}

export interface CardsProps {
    user: User
}