import React from 'react'

const Progress = ({done}) => {
    return (
        <div className="body">
            <div className="progress">
                <div className="progress-done"
                    style= {
                        {
                            opacity: 1,
                            width:`${done}%`,
                            backgroundColor: "pink"
                        }
                    }>
                    {done}%
                </div>
            </div>
        </div>
    )
}
export default Progress;