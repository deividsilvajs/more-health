const hideForm = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, hide: () => void) => {
    const target = e.target as HTMLDivElement
    if (target.classList[0] === 'form') {
        hide()
    }
}

export default hideForm