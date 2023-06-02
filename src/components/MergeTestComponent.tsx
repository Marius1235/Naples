import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext, useRef } from 'react';
import IBackgroundImage from "../interfaces/IBackgroundImage";
import BackgroundImageItem from "./BackgroundImageItem";
import ImageScrollerComponent from './ImageScrollerComponent';
import BackgroundImageModule from "../modules/BackgroundImageModule";
import ICapturedImage from '../interfaces/ICapturedImage';
import { CapturedImageContext } from "../contexts/CapturedImageContext";
import mergeImages from 'merge-images';  

/*use state initierer et tomt array av typen IBackgroundImage
setBackgroundImages og backgroundImages er koblet sammen, slik at når setBackgroundImages blir kjørt
så oppdateres verdiene i backgroundImages*/
const MergeTestComponents = () => {
  const [backgroundImages, setBackgroundImages] = useState<IBackgroundImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<IBackgroundImage | null>(null);
  const capturedImage = useContext(CapturedImageContext);
  const [overlayImage, setOverlayImage] = useState<IBackgroundImage | null> (null);

  // Useffect kjører setBackgroundImagesFromModule når endringer gjøres i bakgrunnen
  useEffect(() => {
    setBackgroundImagesFromModule();
  }, []);
 
  /*Henter backgroundimages fra modul og legger de i images, setBackgroundImages settes til images
  setSelectedImage settes til images med index 2*/
  const setBackgroundImagesFromModule = () => {
    const images = BackgroundImageModule.getAll();
    setBackgroundImages(images);
    setSelectedImage(images[2]);
  };

  const MergeImages = (backgroundImage : any, capturedImage : any) => {
    const [mergedImage, setMergedImage] = useState("");
  
    useEffect(() => {
      // Assuming you have some images stored in your public folder
      mergeImages([backgroundImage, capturedImage])
        .then((b64) => setMergedImage(b64))
        .catch((error) => console.error(error));
    }, []);
  
    return <img src={mergedImage} alt="Merged images" />;
  }

  let mergedImage = MergeImages(selectedImage,selectedImage);
  
  const handleImageClick = (image: IBackgroundImage) => {
    setSelectedImage(image);
    mergedImage = MergeImages(image,image);
  };
  
  
  
  

  return (
    <div>
              <ImageScrollerComponent
              images={backgroundImages}
              selectedImage={selectedImage}
              onImageClick={handleImageClick}
            />
            <h1>Captured Image {capturedImage?.capturedImage}</h1>            
            {mergedImage}
                
    </div>
  );
};

export default MergeTestComponents;