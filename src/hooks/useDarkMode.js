import { useEffect } from 'react'
// Hook Import
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setValue] = useLocalStorage('darkMode', false)

    // Side-effects
    useEffect(() => {
        if(darkMode) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setValue]
}