import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import ICapturedImage from "../interfaces/ICapturedImage";

export const CapturedImageContext = createContext<ICapturedImage | null>(null);

type Props = {
  children: ReactNode;
};

// Context makes it easier to share data between pages. Without context you would have to reload the page to display the image.

const CapturedImageProvider: FC<Props> = ({ children }) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  return (
    <CapturedImageContext.Provider value={{ capturedImage, setCapturedImage }}>
      {children}
    </CapturedImageContext.Provider>
  );
};

export default CapturedImageProvider;
