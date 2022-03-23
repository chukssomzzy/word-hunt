import './App.css';
import {useGlobalContext} from './context'
import {Container, Switch, withStyles} from "@material-ui/core"
import Header from "./components/header/Header"
import Definations from "./components/Defination/Definations.js"
import { grey } from "@material-ui/core/colors";


function App() {
  const {lightMode, setLightMode} = useGlobalContext()
const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <section className="App" style={{height:'100vh',backgroundColor:lightMode?"#fff":'#282c34', color:lightMode?"#000":"#fff",transistion:"all .5s linear"}}>
      <Container style={{display:'flex',flexDirection:'column',height:'100vh',justifyContent:"space-evenly"}} maxWidth="md">
      <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
        <span>{`${lightMode? "Light Mode": "Dark Mode"}`}</span>
        <DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)}
            
          />
        </div>
         <Header ></Header>
        <Definations></Definations>
    </Container>
    </section>
  );
}

export default App;
