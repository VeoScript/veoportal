import { useTheme } from 'next-themes'
import DarkModeToggle from 'react-dark-mode-toggle'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <DarkModeToggle
      className="rounded-full focus:outline-none dark:ring-1 dark:ring-inset"
      onChange={toggleDarkMode}
      checked={theme === 'dark' ? true : false}
      size={50}
    />
  )
}

export default ThemeChanger
