import React, {useState} from 'react';

const Progress = ({done}) => {
    const [style, setStyle] = useState({    });

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width:`${done}%`
        }
        setStyle(newStyle)
    }, 500)

    return (
        <div className="body">
            <div className="progress">
                <div className="progress-done"
                    style= {
                        style
                    }>
                    {done}%
                </div>
            </div>
        </div>
    )
}
export default Progress;
