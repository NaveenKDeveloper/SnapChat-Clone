import React, { useRef, useCallback} from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch} from 'react-redux'
import { setCameraImage } from './features/CameraSlice';
import { useHistory } from 'react-router-dom'
import './Capture.css'


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user", // front facing camera
};


function Capture() {

    const webcamRef = useRef()
    const dispatch = useDispatch()
    const history = useHistory()


    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();  
            dispatch(setCameraImage(imageSrc));
            history.push('/preview')

           
            
        }, 
        [webcamRef]
    )
    return (
        <div className='webcamCapture'>
          <Webcam 
          audio={false}
          height={videoConstraints.height}
          width={videoConstraints.width}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints} 
          />  

         <RadioButtonUncheckedIcon className='webcamCapture__button' onClick={capture} fontSize="large" />
        </div>
    )
}

export default Capture
