import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {HideLoader, ShowLoader} from '../../../redux/loaderSlice'
import { toast } from 'react-hot-toast'
import { SendEnglishWord } from '../../../forBackend/apicalls/EnglishWord'


function EnglishLanguageWork() {

  

  const[englishWord, setEnglishWord]=useState({
    english:'',
    polish:'',
    polish2:'',
    polish3:'',
    pronunciation:'',
    weeklytype:'',
    tousen:'',

  })
  const dispatch=useDispatch()
  const handleChange=({currentTarget: input})=>{
    setEnglishWord({ ...englishWord, [input.name]: input.value })
   }

 
   const handleEnglishWord=async(e)=>{
    e.preventDefault();
    try {
      dispatch(ShowLoader())
      const response=await SendEnglishWord(englishWord)
      dispatch(HideLoader())
      if(response.success){toast.success(response.message)
        setEnglishWord({
          english:'',
          polish:'',
          polish2:'',
          polish3:'',
          pronunciation:'',
        })
      }
      else{
			  dispatch(HideLoader())
				toast.error(response.message)           
			  }
    } catch (error) {
      dispatch(HideLoader())
      toast.error(error.message+ " w wysyłaniu")
    }
   }

  return (
    <div className='englishLanguageWork'>
        <form onSubmit={handleEnglishWord}>
          <input
            type='text'
            placeholder='angielskie sółwko'
            name='english'
            required
            value={englishWord.english} 
            onChange={handleChange} 
          />
          <input
            type='text'
            placeholder='angielska wymowa'
            name='pronunciation'
            required
            value={englishWord.pronunciation} 
            onChange={handleChange} 
          />

          <input
            type='text'
            placeholder='polskie sółwko'
            name='polish'
            required
            value={englishWord.polish} 
            onChange={handleChange} 
          />
          <input
            type='text'
            placeholder='polskie sółwko-2'
            name='polish2'
            value={englishWord.polish2} 
            onChange={handleChange} 
          />
                    <input
            type='text'
            placeholder='polskie sółwko-3'
            name='polish3'
            value={englishWord.polish3} 
            onChange={handleChange} 
          />

          <label for="weeklytype">Grupa</label>
          <input
            list="weeklytypes"
            id="weeklytype"
            placeholder='A B C D'
            name='weeklytype'
            required
            value={englishWord.weeklytype} 
            onChange={handleChange} 
          />
          <datalist id='weeklytypes'>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </datalist>
          <label for='tousen'>Który tysiąc?</label>
          <input
            type="number"
            id="tousen"
            name="tousen"
            required 
            min='1'
            max="4"
            onChange={handleChange} 
          />
         <button className='greenBtn'>Wyślij</button>
        </form>
    </div>
  )
}

export default EnglishLanguageWork