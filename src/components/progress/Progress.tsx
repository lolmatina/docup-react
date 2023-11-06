import CanvasJS from 'canvasjs'
import React from 'react'
import './styles.css'

interface option{
    title: {
        text: string
    }
    data: {
        type: string,
        dataPoints: {
            label: string,
            y: number
        }[]
    }[]
}



class Progress extends React.Component {
    // state: State = {
    //     active: 0
    // }

    options: option;
    ref: React.RefObject<HTMLDivElement>
    chart!: CanvasJS.Chart
    constructor(props: {}) {
        super(props);
        this.ref = React.createRef();
        this.options = {
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{				
                type: "column",
                dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
                ]
            }]
        }
    }

    componentDidMount(): void {
        if (!this.ref.current)
            return;

        this.chart = new CanvasJS.Chart('container', this.options);
        this.chart.render();
    }

    render(): React.ReactNode {
        return (
        <div id="charContainer" ref={this.ref}>
            
        </div>
        );
    }
}

export default Progress;