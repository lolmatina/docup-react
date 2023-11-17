import React from 'react'
import REQUEST_MODEL from '../../utils/request_model'
import Filter from '../filter/Filter'
import {Modal} from 'antd'
import './styles.css'
import Constructor from '../../pages/constructor/Constructor'
import axios from 'axios'


type State = {
    choose: boolean,
    open: boolean,
    request_model: REQUEST_MODEL
}

type Props = {
    request_models: REQUEST_MODEL[]
 
}

class Request extends React.Component <Props, State>{
    constructor(props) {
        super(props); 
        this.props.request_models
    }

    

    async getRequestModels() {

    }

    createRequest() {

    }

    render(): React.ReactNode {
        return (
        <Modal
            open={this.state.choose}
            onOk={() => {
                this.setState({choose: false, open: true})
            }}
            onCancel={() => {
                this.setState({choose: false, open: false})
            }}
            width={1000}
        >
            <Filter />
        </Modal>
        )
    }
}

export default Request