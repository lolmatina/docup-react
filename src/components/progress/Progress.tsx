import React from 'react'
import './styles.css'

class Progress extends React.Component {
    render(): React.ReactNode {
        return (<div className='progress'>
            <div className="progress-wrapper">
                <div className="progress-box">
                    <div className="progress-indicator"></div>
                </div>
            </div>
            <div className="progress-text">
                <span className="progress-subtitle">
                    Обработано 0 карточек из 13
                </span>
            </div>
        </div>)
    }
}

export default Progress