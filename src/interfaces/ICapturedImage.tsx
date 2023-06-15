interface ICapturedImage {
    capturedImage: string | null;
    munchifiedImages: any[];
    setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;
    setMunchifiedImages: (images: any) => void;
    removeBackground?: () => Promise<void>;
}

export default ICapturedImage;