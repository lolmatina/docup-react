import React from 'react';
import './styles.css';

class Button extends React.Component<{
    icon: () => JSX.Element,
    label: string,
    link: string,
    onClick: React.MouseEventHandler<HTMLLIElement>
    selected: boolean
}, {
    hover: boolean
}> {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(): void{
        this.setState({hover: true});
    }

    handleMouseLeave(): void {
        this.setState({hover: false});
    }

    render(): React.ReactNode {
        return (<li 
        className={
            'button-item ' + 
            (this.props.selected? 'button-item-selected ': '') +
            (this.state.hover? 'button-item-hover ': '')
        } 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.onClick}>
            <a href={this.props.link? `/${this.props.link}`: undefined}
            onClick={(e) => {if (this.props.link) {e.preventDefault(); history.pushState({}, '',`/${this.props.link}`)}}}
            >
                <div className="button-icon">
                    {this.props.icon()}
                </div>
                <div className="button-label">{this.props.label}</div>
            </a>
        </li>)
    }
}

export default Button;