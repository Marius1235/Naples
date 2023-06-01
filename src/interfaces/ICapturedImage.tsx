interface ICapturedImage {
    capturedImage: string | null;
    setCapturedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export default ICapturedImage;