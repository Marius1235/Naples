const BackgroundRemoverService = (
    () => {
      const removeBackground = async (image: string): Promise<string> => {
        image = image.replace("data:image/png;base64,", "");
        //console.log(image)
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file_b64', image);

        //qWKnGV8R3gbHaWzJD5UEGVUd
        //U7nGdhuYM4qWVf5hZBKqR6RC

        try {
            const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Api-Key': 'U7nGdhuYM4qWVf5hZBKqR6RC',
                },
            });

            if (!response.ok) {
                throw new Error('Remove bg API call failed');
            }

            const data = await response.blob();
            const imageUrl = URL.createObjectURL(data);

            // return the image data
            return imageUrl;

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