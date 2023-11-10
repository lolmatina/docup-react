import React from 'react';
import './styles.css'
import Canvas from '../../components/canvas/canvas';

export default class Constructor extends React.Component {
    render(): React.ReactNode {
        return (<div className="constructor">
            <Canvas />
        </div>)
    }
}