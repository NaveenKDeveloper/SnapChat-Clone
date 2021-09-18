import React, { useEffect } from 'react'
import { selectcameraImage } from './features/CameraSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();
    
    
    useEffect(() => {
        if(!cameraImage){
            history.replace('/'); // redirects to homepage
        }
    }, [cameraImage, history])

    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
            
            
        </div>
    )
}

export default Preview
