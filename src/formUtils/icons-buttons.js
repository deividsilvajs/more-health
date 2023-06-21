export const loaderIcon = (button, setShowLoader) => {
    button.style.display = 'none'
    setShowLoader(true)
}

export const defaultButton = (button, setShowLoader) => {
    button.style.display = 'block'
    setShowLoader(false)
}