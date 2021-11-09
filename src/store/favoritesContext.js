import React from 'react'
import { createContext , useState} from 'react';

 const FavoritesContext = createContext({
     favorites:[],
     totalFavorites:0,
     addFavorites: (meetupId) => {},
     removeFavorites: (meetupId) => {},
     itemIsFavorite : (meetupId) => {}
 });

 export function FavoritesContextProvider(props){
     const [userFavorites, setUserFavorites] = useState([])

     function addUserFavorites(favoriteMeetup){
      setUserFavorites((prevUserFavorites) =>{
          return prevUserFavorites.concat(favoriteMeetup);
      });
    }

    console.log('yoyo')
    
      function removeFavoriteMeetups(meetupId){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter(
                meetup => meetup.id !== meetupId
            )
        })
      }
     

     function itemIsFavoriteMeetups(meetupId){
       
            return userFavorites.some(
                meetup => meetup.id === meetupId
            )
      }
     
     const context ={
       favorites: userFavorites,
       totalFavorites: userFavorites.length,
       addFavorites: addUserFavorites,
       removeFavorites: removeFavoriteMeetups,
       itemIsFavorite : itemIsFavoriteMeetups
     };

     return(
         <FavoritesContext.Provider value={context}>
             {props.children}
         </FavoritesContext.Provider>
     );
 }

 export default FavoritesContext;
