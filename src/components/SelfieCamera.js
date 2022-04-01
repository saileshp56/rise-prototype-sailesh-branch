import React, { useEffect, useState, useRef } from 'react';

/**
 * A <video/> element live streaming from the user's camera. The SelfieCamera's ref
 * is forwarded to the <video/> element, enabling for example media track access:
 * ref.current.srcObject?.getTracks()
 * @prop {Integer} width - the video display width in pixels
 * @prop {Integer} height - the video display height in pixels
 * @prop {Boolean} withAudio - if true, collects both audio and video tracks
 * @prop {Function} onTryMediaAccess - called after each attempt to access the user's
 *   media. If the attempt is successful, true is passed as the only argument.
 *   If not, false is passed as the first argument, and the second argument is
 *   a DOMException with error name 'NotAllowedError' if the user denies permission
 *   or 'NotFoundError' if the requested media are not available.
 */
const SelfieCamera = React.forwardRef(({ width, height, withAudio, onTryMediaAccess }, ref) => {
  const [streaming, setStreaming] = useState(false);

  function getVideo() {
    let constraints = {
      video: { facingMode: 'user' },
      audio: withAudio
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        let video = ref.current;
        video.srcObject = stream;
        video.play();
        onTryMediaAccess && onTryMediaAccess(true);
        setStreaming(true);
      })
      .catch((err) => {
        onTryMediaAccess && onTryMediaAccess(false, err);
        setStreaming(false);
      });
  }

  useEffect(() => {
    getVideo();
  }, [ref]);

  return (
    <div>
      <video ref={ref} width={width} height={height}/>
      {
        !streaming &&
        <div width={width} height={height}>
          <p>Camera{withAudio && " or microphone"} unavailable. Please check your permission settings.</p>
          <button onClick={getVideo}>Retry</button>
        </div>
      }
    </div>
  );
});

/**
 * Captures a still image from a SelfieCamera and draws it onto a canvas (if provided)
 * @param {React reference} cameraRef a reference to the SelfieCamera component
 * @param {React reference} [canvasRef] a reference to a canvas element
 * @return {Promise<Blob>} a Promise resolving to the image in png format
 */
async function takeSelfie(cameraRef, canvasRef) {
  let camera = cameraRef.current;
  let canvas = canvasRef?.current || document.createElement('canvas');

  // calculate image placement
  let dx = 0;
  let dy = 0;
  let dw = canvas.width;
  let dh = canvas.height;
  const sw = camera.videoWidth;
  const sh = camera.videoHeight;
  if (sw / sh < dw / dh) {
    // tall image
    dw = dh * sw / sh;
    dx = (canvas.width - dw) / 2;
  } else if (sw / sh > dw / dh) {
    // wide image
    dh = dw * sh / sw;
    dy = (canvas.height - dh) / 2;
  }

  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(camera, dx, dy, dw, dh);

  let imageBlob = await new Promise((res) => {
    canvas.toBlob((blob) => {
      res(blob);
    }, 'image/png');
  });

  return imageBlob;
}

export default SelfieCamera;
export { takeSelfie };
