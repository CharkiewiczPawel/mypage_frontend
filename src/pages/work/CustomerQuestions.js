import React, { useEffect, useState }  from 'react'
import { GetCustomerQuestion } from '../../forBackend/apicalls/CustomerQuestion'
import moment from 'moment'
import 'moment/locale/pl'
import './CustomerQuestion.css'

function CustomerQuestions() {

    const[questions=[], setQuestions]=useState([])
    const[checkQuestions, setCheckQuestions]=useState()


    const getCustomerQuestion=async()=>{
    
        try {
          const response=await GetCustomerQuestion()
          if(response.success){
            
            setQuestions(response.data)
            console.log(questions)
          }
        } catch (error) {
          console.log(error.message)
        }
      }
      const check=()=>{
        setCheckQuestions(!checkQuestions)
        console.log(checkQuestions)
      }
    
      useEffect(()=>{
        getCustomerQuestion()
      },[checkQuestions])

  return (
    <div className='customerQuestions'>
        <h2>Wiadomości od klientów</h2>
        <button onClick={()=>check()} className='greenBtn buttonCustomerQuestion'>Odśwież</button>
        <div className='question_container'>
        {questions.reverse().map((message, id)=>{
          return(
            <div className='customerQuestion_container' key={id}>
              <p className='customerEmail'>{message.email}</p>
              <p className='customerMessage'>{message.text}</p> 
              <p className='customerDate'>{moment(message.createdAt).locale('pl').format('llll')}</p>
              <p className='customerDateAgo'>{moment(message.createdAt).startOf('hour').fromNow()}</p>
            </div>           
          )
        })}
        </div>
    </div>
  )
}

export default CustomerQuestions