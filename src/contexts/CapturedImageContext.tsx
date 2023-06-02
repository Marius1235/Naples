import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import ICapturedImage from "../interfaces/ICapturedImage";
import BackgroundRemoverService from "../services/BackgroundRemoverSerive";

export const CapturedImageContext = createContext<ICapturedImage | null>(null);

type Props = {
  children: ReactNode;
};

// Context makes it easier to share data between pages. Without context you cant render things on another page without refreshing.

const CapturedImageProvider: FC<Props> = ({ children }) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    if (capturedImage) {
      try {
        const newImage = await BackgroundRemoverService.removeBackground(capturedImage);
        setCapturedImage(newImage);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <CapturedImageContext.Provider
      value={{
        capturedImage,
        setCapturedImage,
        removeBackground: handleRemoveBackground,
      }}
    >
      {children}
    </CapturedImageContext.Provider>
  );
};

export default CapturedImageProvider;
