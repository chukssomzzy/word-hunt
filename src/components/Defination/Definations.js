import React from "react"
import "./Definations.css"
import {useGlobalContext} from "../../context"
const Definations = ()=>{
  const {word,language,meanings,lightMode} = useGlobalContext();

  return(
       <div className="meaning">
         {
           meanings[0] && word && language === 'en'&&(
             <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{width:"100%",backgroundColor:lightMode ? "#3b5360" : "#fff",borderRadius:10}} controls>Your Browser doesn't support audio element.</audio>
           )
         }
           {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def,index) => (
              <div
                className="single-mean"
                key={index}
                style={{backgroundColor:lightMode ? "#3b5360" : "#fff", color:lightMode?"#fff":"#000"}}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "#000", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example : </b> {def.example}
                  </span>
                )}
                {def.synonyms.length !==0 && (
                  <span>
                    <b>Synonyms : </b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
      ))}
    </div>
  )
         }

export default Definations
