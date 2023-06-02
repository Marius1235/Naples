import IBackgroundImage from "../interfaces/IBackgroundImage";
import {FC} from 'react';

//returnerer en bildekomponent, bildet hentes basert på filnavn
const BackgroundImageItem:FC<IBackgroundImage> = ({id,name}) => {
    return(
        <div>
            <img src={require(`../assets/images/${name}`)}/>
        </div>
    )
}

export default BackgroundImageItem;