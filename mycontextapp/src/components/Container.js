import Header from './Header'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'
import Profile from './Profile'


function Container() {
    const {theme} =  useTheme();
    console.log(theme)
  return (
    <div className={`app ${theme}`}>
        <Header></Header>
      <hr></hr>
      <Button></Button>

      <hr></hr>
      <Profile></Profile>
      
    </div>
  )
}

export default Container
