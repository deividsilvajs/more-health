import { Button, SetShowLoader } from '../types/form'

export const loaderIcon = (button: Button, setShowLoader: SetShowLoader) => {

    if (button) {
        button.style.display = 'none'
        setShowLoader(true)
    }

}

export const defaultButton = (button: Button, setShowLoader: SetShowLoader) => {
    
    if (button) {
        button.style.display = 'block'
        setShowLoader(false)
    }
    
}