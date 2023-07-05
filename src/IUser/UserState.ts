import React, { SetStateAction } from 'react'
import { User } from './User'

export type SetUser = React.Dispatch<SetStateAction<User>>

export type UserState = [User, SetUser]