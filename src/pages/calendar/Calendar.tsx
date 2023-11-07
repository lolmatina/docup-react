import React, {ReactNode} from 'react'
import './styles.css'

class Calendar extends React.Component {
    render(): ReactNode {
        return (<div className="container-layout">
            <div className="container-wrapper">
                <div className="content">
                    <div className="developing">
                        В разработке...
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Calendar