import React, { useEffect, useState } from 'react'
import { GetEnglishWord } from  '../../../forBackend/apicalls/EnglishWord.js'
import {HideLoader, ShowLoader} from '../../../redux/loaderSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

function DisplayenglishWord() {
   
    const[word=[],setWord]=useState([])
    const dispatch=useDispatch()
    const getEnglishWord=async()=>{
        try {
            dispatch(ShowLoader())
            const response=await GetEnglishWord()
            if(response.success){
                dispatch(HideLoader())
                setWord(response.data)  
            }
        } catch (error) {
            dispatch(HideLoader())
            toast.error(error.message +" Catch")
        }
    }
    useEffect(()=>{
        getEnglishWord()
      },[])
  return (
    <div>
    <div className='main_dictionaryAdmin_container'>
        {word.map((word,id)=>{
            return(
                <div key={id} className='dictionaryAdmin_container' >          
                    <div className='englishWord_dictionaryAdmin'>
                      <p className='word_dictionaryAdmin'>{word.english}</p>
                      <p className='country_dictionaryAdmin'>{id+1}. EN</p>
                    </div>
                    <div className='englishWord_dictionaryAdmin'>
                       <p className='pronunciation_dictionaryAdmin'>{word.pronunciation}</p>
                       <p className='p_pronunciation_dictionaryAdmin'>-</p>
                    </div>
                    <div className='englishWord_dictionaryAdmin'>
                        <p className='polishWord_dictionaryAdmin'>{word.polish}  {word.polish2?",":null} {word.polish2} {word.polish3?",":null}  {word.polish3}</p>
                        <p className='country_dictionaryAdmin'>PL</p>
                    </div>
                  
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default DisplayenglishWord