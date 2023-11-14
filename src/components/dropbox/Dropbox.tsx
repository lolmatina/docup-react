import React from 'react';
import './styles.css';

type Props = {
    default: string;
    items: string[];
    callback: any;
}

type State = {
    selected: boolean;
    typing: true;
    current: number
}

class Dropbox extends React.Component<Props, State> {
    render(): React.ReactNode {
        return (<div className='dropbox'>
            <div className="dropbox-select">
                <div className="dropbox-select-selector">
                    <span className="dropbox-select-search">
                        <input type="search" autoComplete='off' role='combobox' aria-haspopup='listbox' aria-autocomplete='list' className="dropbox-select-search-input" />
                    </span>
                    <span className="dropbox-select-item" title='Все документы'>
                        {(this.state.current == -1)? this.props.default: this.props.items[this.state.current]}
                    </span>
                </div>
                <span className="dropbox-select-arrow">
                    <span className="dropbox-select-img">
                        
                    </span>
                </span>
            </div>
        </div>)
    }
}

export default Dropbox;