import React from "react"
import "./Definations.css"
import {useGlobalContext} from "../../context"
const Definations = ()=>{
  const {word,language,meanings} = useGlobalContext();

  return(
       <div className="meaning">
         {
           (word !== "")? meanings.map(data=>{
                const {phonetics,meanings} = data;
                const {definitions} = meanings
             definitions.map((def,index)=>
                  (
                   <div key={index} className="single-mean" style={{backgroundColor:'#fff',color:'#000'}}>
                   <b>{def.definition}</b>
                     <hr style={{backgroundColor:'#000',width:'100%'}} />
                     {

                      def.example && (<span><b>Example : </b>{def.example}</span>)
                     }
                     {
                       def.synonyms && <span><b>Example : </b>{def.synonyms.map(s=>`${s}, `)}</span>
                     }
                   </div>
                 )            
             )}) :
<span className="subtitle">start by typing something</span>
         }
    </div>
  )
}

export default Definations
