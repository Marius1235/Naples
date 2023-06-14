interface ICapturedImage {
    capturedImage: string | null;
    munchifiedImages: { [key: string]: string } | null;
    setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;
    setMunchifiedImages: React.Dispatch<React.SetStateAction<{} | null>>;
    removeBackground?: () => Promise<void>;
}

export default ICapturedImage;