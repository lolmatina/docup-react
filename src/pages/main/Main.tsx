import React, {ReactNode} from 'react'
import './styles.css'
import Card from '../../components/card/Card'
import Doughnut from '../../components/doughnut/Doughnut'
import Linechart from '../../components/linechart/Linechart';
import Progress from '../../components/progress/Progress';



class Main extends React.Component {

    constructor(props) {
        super(props);

         
    }

    render(): ReactNode {
        return (<div className="container-layout">
            <div className="container-wrapper">
                <div className="content">
                    <div className="container-left">
                        <Card header='Требующие участия за 3 месяца' classes={['mb16']}>
                            <Doughnut />
                        </Card>
                        <Card header='Мой профиль'>
                            <div className="developing">
                                В разработке...
                            </div>
                        </Card>
                    </div>
                    <div className="container-right">
                        <Card header='Ваш прогресс' classes={['mb16', 'hauto']}>
                            <Progress />
                        </Card>
                        <Card header='Ваша эффективность' classes={['mb16']}>
                            <Linechart />
                        </Card>
                        <Card header='Календарь'>
                            <div className="developing">
                                В разработке...
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Main