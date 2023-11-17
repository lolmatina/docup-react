import React from 'react'
import './styles.css'

interface filter {
    label: string,
    value: string
}

type Props = {
    title: string,
    filters: filter[],
    onChange: (selected: filter) => void
}

type State = {
    selected: number
}

class Filter extends React.Component <Props, State>{
    state: State = {
        selected: 0
    }

    render(): React.ReactNode {
        return (<div className='filter'>
            <div className="filter-head">
                <span className="filter-head-text">
                    <strong>
                        {this.props.title}
                    </strong>
                </span>
            </div>
            <div className="filter-body">
                {this.props.filters.map((elem, index) => {
                    return (<div className={
                        (this.state.selected == index)? 'filter-item active': 'filter-item'
                    } 
                    key={index} 
                    onClick={() => {
                        this.props.onChange(elem);
                        this.setState({selected: index})
                    }}>
                        <div className="filter-item-wrap">
                            <span className="filter-item-text">
                                {elem.label}
                            </span>
                        </div>
                    </div>)
                })}
            </div>
        </div>)
    }
}

export default Filter;