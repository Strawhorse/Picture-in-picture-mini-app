const buttonElement = document.getElementById('button')
const videoElement = document.getElementById('video')

// Async function, prompt to select media stream and pass to video element then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        // Catch error
        console.log("Error found:", error)
    }
}

// have start button launch picture in picture
buttonElement.addEventListener('click', async () => {
    // disable the button when it is clicked on
    buttonElement.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    buttonElement.disabled = false;
});


selectMediaStream();