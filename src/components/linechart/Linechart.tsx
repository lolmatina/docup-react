import CanvasJS from "@canvasjs/charts";
import React from "react";
import './styles.css'

class Linechart extends React.Component {
    chart!: CanvasJS.Chart;
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.chart = new CanvasJS.Chart("linechart",
        {
        data: [
        {
            type: "line",

            dataPoints: [
            { x: new Date(2012, 0, 1), y: 12 },
            { x: new Date(2012, 1, 1), y: 3 },
            { x: new Date(2012, 2, 1), y: 4 },
            { x: new Date(2012, 3, 1), y: 6 },
            { x: new Date(2012, 4, 1), y: 4 },
            { x: new Date(2012, 5, 1), y: 0 },
            { x: new Date(2012, 6, 1), y: 4 },
            { x: new Date(2012, 7, 1), y: 8 },
            { x: new Date(2012, 8, 1), y: 1 },
            { x: new Date(2012, 9, 1), y: 9 },
            { x: new Date(2012, 10, 1), y: 0 },
            { x: new Date(2012, 11, 1), y: 5 }
            ]
        }
        ]
        });

        this.chart.render()
    }

    render(): React.ReactNode {
        return (<div className="linechart">
            <div id="linechart"></div>
        </div>)
    }
}

export default Linechart