interface ICapturedImage {
    capturedImage: string | null;
    setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;
    removeBackground?: () => Promise<void>;
}

export default ICapturedImage;