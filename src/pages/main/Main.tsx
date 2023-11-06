import React, {ReactNode} from 'react'
import './styles.css'
import Card from '../../components/card/Card'
import Progress from '../../components/progress/Progress'

class Main extends React.Component {
    render(): ReactNode {
        return (<div className="container-layout">
            <div className="container-wrapper">
                <div className="content">
                    <div className="container-left">
                        <Card header='Требующие учатия за 3 месяца'>
                            <Progress />
                        </Card>
                    </div>
                    <div className="container-right">
                    
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Main