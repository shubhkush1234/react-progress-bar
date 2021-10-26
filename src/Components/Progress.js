import React, {useState, useEffect} from 'react';

const Progress = ({done}) => {
    const [style, setStyle] = useState({    });

    useEffect(() => {
       const timer = setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width:`${done}%`
            }
            console.log("useEffect running")
            setStyle(newStyle)
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, []);


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
