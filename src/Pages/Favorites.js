import {React , useContext} from 'react';
import { MeetupList } from '../Components/meetups/MeetupList';
import FavoritesContext from '../store/favoritesContext';


export const Favorites = () => {
    const FavoritesCtx = useContext(FavoritesContext);

    let content;

    if(FavoritesCtx.totalFavorites === 0){
        content = <p>add favorites</p>
    }else{
        content = <MeetupList meetups={FavoritesCtx.favorites}/>
    }

    return (
        <div>
            Favorites page
            {content}
        </div>
    )
}
