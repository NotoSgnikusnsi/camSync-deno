window.onload = () => {
  // Get video element
  const video = document.getElementById("video");
  video.autoplay = true;
  const constraints = { audio: false, video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      console.log("Got stream with constraints: ", constraints)
      stream.onremovetrack = () => {
        console.log("Stream ended.")
      }
      video.srcObject = stream;
    }).catch((error) => {
      console.error(`Error: ${error}`)
    })
};
