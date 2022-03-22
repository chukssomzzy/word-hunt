import './App.css';
import {useGlobalContext} from './context'
import {Container} from "@material-ui/core"
import Header from "./components/header/Header"

function App() {

  return (
    <section className="App" style={{height:'100vh',backgroundColor:'#282c34', color:"#fff"}}>
    <Container style={{display:'flex',flexDirection:'column',height:'100vh'}} maxWidth="md">
   <Header ></Header>
    </Container>
    </section>
  );
}

export default App;
