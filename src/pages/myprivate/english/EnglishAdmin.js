import React,{useState, useEffect} from 'react'
import { toast } from 'react-hot-toast'
import EnglishLanguageWork from './EnglishLanguageWork'
import { GetEnglishWord } from  '../../../forBackend/apicalls/EnglishWord.js'
import './EnglishAdmin.css'
import DisplayenglishWord from './DisplayenglishWord'
import { useNavigate } from 'react-router-dom'

function EnglishAdmin() {
  const[word=[],setWord]=useState([])
  const[openEnterWord,setOpenEnterWord]=useState(false)
  const[openDictionary,setOpenDictionary]=useState(false)
  const navigate=useNavigate()

  const getEnglishWord=async()=>{
      try {
          const response=await GetEnglishWord()
          if(response.success){
              console.log(response)
              setWord(response.data)  
          }
      } catch (error) {
          toast.error(error.message +" Catch")
      }
  }
  useEffect(()=>{
    if(!localStorage.getItem('token')){navigate('/')}
      getEnglishWord()
    })
  return (
    <div className='englishAdmin'>
        <div>
          <p>Ilość słówek: {word.length}</p>
        </div>
        <h2>Angielski dla Admina ;)</h2>
        <div  className='openContainerAdmin'>
           <div className='wordPanel_admin'>
              <h3>Wprowadź nowe słówko</h3>
              <button className='greenBtn' onClick={()=>{setOpenEnterWord(!openEnterWord)}}>{openEnterWord?'Zwiń':'Otwórz'}</button>
           </div>
           <div className='wordPanel_admin'>
              <h3>Słownik</h3>
              <button className='greenBtn' onClick={()=>{setOpenDictionary(!openDictionary)}}> {openDictionary?'Zwiń':'Otwórz'}</button>
           </div>
        </div>
      {openEnterWord?<EnglishLanguageWork/>:null}
      {openDictionary?<DisplayenglishWord/>:null}
    </div>
  )
}

export default EnglishAdmin