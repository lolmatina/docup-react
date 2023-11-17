import React from 'react'
import './styles.css'
import { Select, Row, Col } from 'antd';
import Filter from '../../components/filter/Filter';



class Documents extends React.Component {
    render(): React.ReactNode {
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
                    <Filter />
                </Col>
                <Col span={21}>

                </Col>
            </Row>
        </div>)
    }
}

export default Documents;