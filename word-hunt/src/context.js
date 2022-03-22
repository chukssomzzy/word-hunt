import React, {useEffect,useState,useContext,useCallback} from 'react'
import axios from "axios"
const url = "https://api.dictionaryapi.dev/api/v2/entries/"
const AppContext = React.createContext()


const AppProvider = ({children})=>{

const [language,setLanguage] = useState('en')
const [word, setWord] = useState("")
const [meanings,setMeanings] = useState([])

  const dictionaryApi = useCallback(async ()=>{
    try{
      const data = await axios.get(`${url}${language}/${word}`)
      setMeanings(data.data)
    }catch(e){
     console.log(e)
    }
  },[language])
  useEffect(()=>{
   dictionaryApi() 
  },[language,dictionaryApi])
return(<AppContext.Provider value={{setLanguage,language,word,setWord}}>
  {children}
    </AppContext.Provider>
)
}

//custom hook

export const useGlobalContext= ()=>{
  return useContext(AppContext)
}



export {AppContext,AppProvider}


