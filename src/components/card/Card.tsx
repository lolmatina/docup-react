import React, {ReactNode} from 'react'
import './styles.css'

interface props {
    children: ReactNode,
    header: string,
    extra?: ReactNode,
    classes?: string[]
}

class Card extends React.Component<props> {
    render(): ReactNode {
        const extra = (children: ReactNode): ReactNode => {
            return (<div className='card-head-extra'>
                {children}
            </div>)
        }

        return (<div className={'card' + (this.props.classes? ` ${this.props.classes?.join(' ')}`: '')}>
            <div className="card-head">
                <div className="card-head-wrapper">
                    <div className="card-head-title">
                        {this.props.header}
                    </div>
                    {this.props.extra? extra(this.props.extra): ''}
                </div>
            </div>
            <div className="card-body">
                {this.props.children}
            </div>
        </div>)
    }
}

export default Card;