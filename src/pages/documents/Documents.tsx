import React from 'react'
import './styles.css'
import { Select, Row, Col } from 'antd';
import Filter from '../../components/filter/Filter';
import dummy from '../../utils/dummy'

type State = {
    filterID: number
}

type Props = {

}

class Documents extends React.Component <Props, State>{
    state: State = {
        filterID: 0
    }

    render(): React.ReactNode {
        console.log(JSON.stringify(dummy.request_model.model));
        
        return (<div>
            <Row justify="space-between" style={{padding: '16px 12px 4px'}}>
                <Col>
                    <Row justify="start">
                        <Select
                            showSearch
                            defaultValue={'all'}
                            placeholder="Компания"
                            size='middle'
                            optionFilterProp="children"
                            options={[
                                {
                                    value: 'all',
                                    label: 'Все компании',
                                },
                                {
                                    value: 'qra',
                                    label: 'QazRailAutomatic',
                                }
                        ]}/>
                        <Select
                            showSearch
                            defaultValue={'all'}
                            placeholder="Группа"
                            size='middle'
                            optionFilterProp="children"
                            options={[
                                {
                                    value: 'all',
                                    label: 'Все группы',
                                },
                                {
                                    value: 'buy',
                                    label: 'Закуп',
                                }
                        ]}/>
                        <Select
                            showSearch
                            defaultValue={'all'}
                            placeholder="Шаблон"
                            optionFilterProp="children"
                            size='middle'
                            options={[
                                {
                                    value: 'all',
                                    label: 'Все шаблоны',
                                },
                                {
                                    value: 'buy',
                                    label: 'Заявка на закуп',
                                }
                        ]}/>
                    </Row>
                </Col>
                <Col>
                <Select
                        showSearch
                        defaultValue={'all'}
                        placeholder="Компания"
                        size='middle'
                        optionFilterProp="children"
                        options={[
                            {
                                value: 'all',
                                label: 'Все компании',
                            },
                            {
                                value: 'qra',
                                label: 'QazRailAutomatic',
                            }
                        ]}
                    />
                        <Select
                        showSearch
                        defaultValue={'all'}
                        placeholder="Группа"
                        size='middle'
                        optionFilterProp="children"
                        options={[
                            {
                                value: 'all',
                                label: 'Все группы',
                            },
                            {
                                value: 'buy',
                                label: 'Закуп',
                            }
                        ]}
                    />
                    <Select
                        showSearch
                        defaultValue={'all'}
                        placeholder="Шаблон"
                        optionFilterProp="children"
                        size='middle'
                        options={[
                            {
                                value: 'all',
                                label: 'Все шаблоны',
                            },
                            {
                                value: 'buy',
                                label: 'Заявка на закуп',
                            }
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={3}>
                    <Filter title='Системные фильтры' filters={dummy.filter} onChange={(selected) => {
                        this.setState({filterID: selected.id})
                    }}/>
                </Col>
                <Col span={21}>

                </Col>
            </Row>
        </div>)
    }
}

export default Documents;