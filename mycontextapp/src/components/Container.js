import {useContext} from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../context/ThemeContext'


function Container() {
    const {theme} =  useContext(ThemeContext);
    console.log(theme)
  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
        <Header></Header>
      <hr></hr>
      <Button></Button>
      
    </div>
  )
}

export default Container
