import React from 'react'
import './header.css'
import {TextField,createMuiTheme,ThemeProvider,MenuItem} from "@material-ui/core"
import categories from "../../data/category"
import {useGlobalContext} from "../../context"
const Header = ()=>{
  const {language,setLanguage,word,setWord} = useGlobalContext()
  const darkTheme =createMuiTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type:"dark",
    },
  })
  return(
    <div className="header">
      <span className="title">{word ? word :"Word Hunt"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
            <TextField value={word} onChange={e=>setWord(e.target.value)} className="search" label="search a word"></TextField>
            <TextField
          select
          className="select"
          label="language"
          value={language}
              onChange={e=>{
              setLanguage(e.target.value)
                setWord("")
              }}
        >
              {
                categories.map((category,index)=>{
                  const {value, label} = category;
                  return (
                  <MenuItem key={index} value={label}>
                    {value}
                    </MenuItem>
                  )
              })
              }
        </TextField>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header
