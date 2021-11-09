import React from 'react'
import {History, useHistory} from 'react-router-dom'
import { NewMeetupForm } from '../Components/meetups/NewMeetupForm'

export const NewMeetups = () => {
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            'https://new-app-1cede-default-rtdb.firebaseio.com/meetup.json' ,
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'content type' : 'application/json'
                }
            }
        ).then(()=>{
           history.replace('/all')
        })
    }
    return (
        <div>
           <NewMeetupForm addMeetups={addMeetupHandler} ></NewMeetupForm>
        </div>
    )
}
