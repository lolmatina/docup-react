import React from 'react'
import 'styles.css'
import REQUEST from '../../utils/request';

type Props = {
    requests: REQUEST[];
    title: string;
    onClick: () => any;
}

type State = {}

class List extends React.Component <Props, State> {
    render(): React.ReactNode {
        return (<div className='list'>
            <div className="list-head">
                <div className="list-head-wrapper">
                    <div className="list-head-title">
                        {this.props.title}
                    </div>
                </div>
            </div>
            <div className="list-body">
                {this.props.requests.map((request, index) => {
                    return (<div className='list-item' key={index} onClick={this.props.onClick}>
                        <div className="list-icon"></div>
                        <div className="list-text">
                            <span className="list-text-title">
                                {request.title}
                            </span>
                            <span className="list-text-deadline">
                                {request.deadline.toDateString()}
                            </span>
                        </div>
                    </div>)
                })}
            </div>
        </div>);
    }
}