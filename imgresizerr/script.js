
function resizeImage() {
    const imageInput = document.getElementById('imageInput').files[0];
    const width = document.getElementById('widthInput').value;
    const height = document.getElementById('heightInput').value;

    if (!imageInput) {
        alert('Please select an image to resize.');
        return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function () {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const link = document.createElement('a');
        link.download = 'resized_image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    const reader = new FileReader();
    reader.onload = function (e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(imageInput);
}
    