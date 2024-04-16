import './App.css';
import Button from './components/Button';
import {ThemeProvider} from './context/ThemeContext';
import Header from './components/Header';

function App() {
  return (
 
     <ThemeProvider>
      <Header></Header>
      <hr></hr>
      <Button></Button>
     </ThemeProvider>

  );
}

export default App;
