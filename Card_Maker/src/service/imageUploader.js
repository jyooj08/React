class ImageUploader{
    async upload(file){
        const url = "https://api.cloudinary.com/v1_1/dlizcmiiv/image/upload";
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'etsnzjor');
        formData.append('public_id', file.name.split('.')[0]);
        formData.append('folder','cardMaker');

        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        return response.json();
    }
}

export default ImageUploader;