import { ButtonHTMLAttributes, CSSProperties, Dispatch, SetStateAction } from 'react'

export type Button = ButtonHTMLAttributes<HTMLElement> & {
    style: CSSProperties
}

export type SetShowLoader = Dispatch<SetStateAction<Boolean>>

export const loaderIcon = (button: Button, setShowLoader: SetShowLoader) => {
    button.style.display = 'none'
    setShowLoader(true)
}

export const defaultButton = (button: Button, setShowLoader: SetShowLoader) => {
    button.style.display = 'block'
    setShowLoader(false)
}