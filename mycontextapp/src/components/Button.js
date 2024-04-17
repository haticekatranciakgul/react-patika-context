import { useTheme } from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useTheme();
    

  return (
    <div>
      active theme : {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Change Theme</button>
    </div>
  )
}

export default Button
