import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import ICapturedImage from '../interfaces/ICapturedImage';

export const CapturedImageContext = createContext<ICapturedImage | null>(null);

type Props = {
    children: ReactNode;
}
const CapturedImageProvider: FC<Props> = ({ children }) => {
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
  
    return (
      <CapturedImageContext.Provider value={{ capturedImage, setCapturedImage }}>
        {children}
      </CapturedImageContext.Provider>
    );
};

export default CapturedImageProvider;
