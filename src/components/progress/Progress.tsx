import CanvasJS from '@canvasjs/charts'
import React from 'react'
import './styles.css'

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
        dataPoints: {
            y: number
        }[]
    }[]
}



class Progress extends React.Component {
    options: option;
    ref: React.RefObject<HTMLDivElement>
    chart!: CanvasJS.Chart
    constructor(props: {}) {
        super(props);
        this.ref = React.createRef();
        this.options = {
            animationEnabled: true,
            theme: 'theme2',
            title:{
                // horizontalAlign: "center",
                verticalAlign: "center",
                dockInsidePlotArea: true,
                text: '13'
            },
            axisX: {
                valueFormatString: '',
                tickLength: 0
            },
            label: {
                valueFormatString: ''
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