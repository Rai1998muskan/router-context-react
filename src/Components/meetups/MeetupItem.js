import {React , useContext} from 'react'
import classes from './MeetupItem.module.css';
import {Card} from '../UI/Card';
import FavoritesContext from '../../store/favoritesContext';


export const MeetupItem = (props) => {
   
    const favoritesCtx = useContext(FavoritesContext);

    const iteamIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoriateStatus(){
     
        if(iteamIsFavorite){
           favoritesCtx.removeFavorites(props.id);
        }else{
            favoritesCtx.addFavorites({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address 
            })
        }
    }

    return (
        <li className={classes.item}>
        <Card>
        <div className={classes.image}>
                <img scr={props.image} alt=""/>
            </div>
            <div className={classes.content}>
            <h3>{props.title}</h3>
             <address>{props.address}</address>
             <p>{props.description}</p>
            </div>
             <div className={classes.actions}>
                 <button onClick={toggleFavoriateStatus}>{iteamIsFavorite ? 'Remove favorite ' : 'To favorite'}</button>
             </div>
        </Card>
        </li>
    )
}
