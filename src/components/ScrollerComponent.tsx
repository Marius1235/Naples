import { useState, useEffect, useContext } from 'react';
import IBackgroundImage from "../interfaces/IBackgroundImage";
import BackgroundImageModule from "../modules/BackgroundImageModule";
import BackgroundImageItem from './BackgroundImageItem';

const ScrollerComponent = () => {
    const [backgroundImages, setBackgroundImages] = useState<IBackgroundImage[]>([]);
    const [selectedImage, setSelectedImage] = useState<IBackgroundImage | null>(null);
    
    useEffect(() => {
        setBackgroundImagesFromModule();
      }, []);

    const setBackgroundImagesFromModule = () => {
        const backgroundImages = BackgroundImageModule.getAll();
        return backgroundImages.map((image, i) =>
            <BackgroundImageItem            
            id = {image.id}
            name = {image.name}
            />
        )
    }
    
    return(
        <section className="container grid text-center">
            {/* <section><img src={require(`../assets/images/${selectedImage?.name}`)} alt={selectedImage?.name} /></section>  */}
            <section className="row">{setBackgroundImagesFromModule()}</section>           
        </section>
    )
}

export default ScrollerComponent;