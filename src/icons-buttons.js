export function loaderIcon(button, setShowLoader) {
    button.style.display = 'none';
    setShowLoader(true);
}

export function defaultButton(button, setShowLoader) {
    button.style.display = 'block';
    setShowLoader(false);
}