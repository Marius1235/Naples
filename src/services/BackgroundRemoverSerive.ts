import React, { useContext, useEffect } from 'react';
import { ResponseType } from 'axios';
import { CapturedImageContext } from '../contexts/CapturedImageContext';

const BackgroundRemoverService = (
    () => {
        const removeBackground = async (image: string): Promise<string> => {
            const base64Image = btoa(image);

            try {
                const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                  method: 'POST',
                  headers: {
                    'X-Api-Key': '<YOUR-API-KEY>',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    image_file_b64: base64Image,
                    size: 'auto',
                  }),
                });
            
                if (!response.ok) {
                  throw new Error('Remove bg API call failed');
                }
            
                const data = await response.json();
            
                // return the image data
                return data.result;
              } catch (error) {
                console.error(error);
                throw error;
              }
        };

        return{
            removeBackground
        }
    }    
)();

export default BackgroundRemoverService;