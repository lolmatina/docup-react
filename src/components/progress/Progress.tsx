import CanvasJS from '@canvasjs/charts'
import React from 'react'
import './styles.css'
import REQUEST from '../../utils/request'

interface option{
    animationEnabled: boolean,
    title: {
        dockInsidePlotArea: true,
        verticalAlign: string,
        text: string
    }
    data: {
        type: string,
        startAngle: number,
        innerRadius: number,
        explodeOnClick: boolean,
        dataPoints: {
            y: number
        }[]
    }[]
}

interface requestList {
    type: string,
    requests: REQUEST[]
}

type Props = {
    requests: REQUEST[]
}

type State = {
    current: number
}


class Progress extends React.Component<Props, State> {
    options: option;
    ref: React.RefObject<HTMLDivElement>;
    chart!: CanvasJS.Chart;
    state: State = {
        current: 0
    };
    requestList!: requestList[]
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.options = {
            animationEnabled: true,
            title:{
                // horizontalAlign: "center",
                verticalAlign: "center",
                dockInsidePlotArea: true,
                text: '13'
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                innerRadius: 80,
                explodeOnClick: false,
                dataPoints: [
                    { y: 67 },
                    { y: 28 },
                    { y: 10 },
                    { y: 7 },
                    { y: 15 },
                    { y: 6 } 
                ]
            }],
        }
        const types: Set<string> = new Set();
        this.props.requests.map((request) => {
            types.add(request.model.name);
        });
        types.forEach((type) => {
            this.requestList.push({
                type: type, 
                requests: this.props.requests.filter(request => {
                    return (request.model.name == type);
                })
            });
        });
    }

    componentDidMount(): void {
        if (!this.ref.current)
            return;

        this.chart = new CanvasJS.Chart('chartContainer', this.options);
        this.chart.render();
    }

    render(): React.ReactNode {
        return (<div className="progress">
            <div className='progress-left'>
                <div id="chartContainer" ref={this.ref}></div>
            </div>
            <div className='progress-right'>
                
            </div>
        </div>);
    }
}

export default Progress;