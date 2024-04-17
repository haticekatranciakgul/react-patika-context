import {useContext} from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../context/ThemeContext'
import Profile from './Profile'


function Container() {
    const {theme} =  useContext(ThemeContext);
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
