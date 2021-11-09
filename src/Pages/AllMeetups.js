import {React, useState, useEffect} from 'react'
import { MeetupList } from '../Components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//         id: 'm3',
//         title: 'This is a second meetup',
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//           'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//       },
//   ];


  

export const AllMeetups = () => {

  const [ isLoading , setIsloading] = useState(true);
const [loadMeetups , setLoadMeetups] = useState([]);

useEffect(()=>{

  fetch(
    'https://new-app-1cede-default-rtdb.firebaseio.com/meetup.json' ,
   
).then((response) => {
 return response.json();

}).then((data) =>{
  const meetups =[]

  for (const key in data){
    const meetup ={
      id:key,
      ...data[key]
    };
    meetups.push(meetup)
  }
 setIsloading(false);
 setLoadMeetups(meetups)
})

},[])


if(isLoading){
  return (<section>
    <p>Loading .....</p>
  </section>)
}



    return (
        <div>
        <h1>All meetup pages</h1>
        <MeetupList meetups={loadMeetups}/>
        </div>
    )
}
