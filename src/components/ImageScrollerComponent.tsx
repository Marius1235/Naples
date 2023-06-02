import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IBackgroundImage from '../interfaces/IBackgroundImage';

interface ImageScrollerComponentProps {
    images: IBackgroundImage[];
    selectedImage: IBackgroundImage | null;
    onImageClick: (image: IBackgroundImage) => void;
  }

  const ImageScrollerComponent: React.FC<ImageScrollerComponentProps> = ({ images, selectedImage, onImageClick }) => {
    return (
      <Carousel showThumbs={true} selectedItem={selectedImage?.id}>
        {images.map((image) => (
          <div key={image.id} onClick={() => onImageClick(image)}>
            <img src={require(`../assets/images/${image.name}`)} alt={image.name} />            
          </div>
        ))}
      </Carousel>
    );
  };

export default ImageScrollerComponent;