import DEPARTMENT from './department'
import USER from './user'
import REQUEST from './request'
import REQUEST_MODEL from './request_model'
import DOCUMENT from './document'
import FILTER from './filter'
import FIELD_TYPE from './field_types'
import ACTORS from './actor'
import ACTIONS from './action'

const department: DEPARTMENT = {
    id: 1,
    name: 'IT',
    head: null
}

const user: USER = {
    id: 101,
    name: 'Almat Orazali',
    email: 'almat.orazali02@gmail.com',
    department: department,       
    requests: null
}

const document: DOCUMENT = {
    id: 1,
    name: 'Документ',
    author: user,
    date: new Date(),
    file: null
}

const request_model: REQUEST_MODEL = {
    id: 0,
    name: 'Заявка на оплату',
    model: {
        init: {
            required_fields: [
                {
                    name: 'Описание предмета покупки',
                    type: FIELD_TYPE.DESCRIPTION
                },
                {
                    name: 'Срок исполнения',
                    type: FIELD_TYPE.DEADLINE
                },
                {
                    name: 'Дополнительные основания закупа',
                    type: FIELD_TYPE.DOCUMENT
                }
            ],
            actions: [{
                type: ACTIONS.SUBMIT,
                next_step: 'Согласование с руководителем инициатора'
            }]
        },
        'Согласование с руководителем инициатора': {
            required_fields: [],
            actor: ACTORS.HEAD_OF_INITIATOR,
            actions: [{
                type: ACTIONS.AGREEMENT,
                next_step: ''
            },
            { 
                type: ACTIONS.DECLINE,
                next_step: 'decline'
            }] 
        },
        'Назначение исполнителя': {
            required_fields: [
                {
                    name: 'Исполнитель',
                    type: FIELD_TYPE.USER
                }
            ], 
            actor: ACTORS.HEAD_OF_SUPPLY,
            actions: [{
                type: ACTIONS.ORDER,
                next_step: 'Поиск предмета закупа'
            }]
        },
        'Поиск предмета закупа': {
            required_fields: [
                {
                    name: 'Контрагент',
                    type: FIELD_TYPE.COUNTERPARTY
                },
                {
                    name: 'Наименование товара',
                    type: FIELD_TYPE.TEXT
                },
                {
                    name: 'Сумма к оплате',
                    type: FIELD_TYPE.NUMBER
                },
                {
                    name: 'Валюта',
                    type: FIELD_TYPE.CURRENCY
                },
                {
                    name: 'Срок доставки',
                    type: FIELD_TYPE.DEADLINE
                },
                {
                    name: 'Коммерческое предложение',
                    type: FIELD_TYPE.DOCUMENT
                }
            ],
            actor: ACTORS.SUPPLY,
            actions: [{
                type: ACTIONS.SUBMIT,
                next_step: 'Согласование предмета закупа'
            }]
        },
        'Согласование предмета закупа': {
            required_fields: [],
            actor: ACTORS.HEAD_OF_INITIATOR,
            actions: [{
                type: ACTIONS.AGREEMENT,
                next_step: 'Согласование с финансовым отделом'
            },
            {
                type: ACTIONS.FINALIZATION,
                next_step: 'Поиск предмета закупа'
            }]
        },
        'Согласование с Финансовым отделом': {
            required_fields: [],
            actor: ACTORS.HEAD_OF_ECON,
            actions: [{
                type: ACTIONS.AGREEMENT,
                next_step: 'Согласование с Бухгалтерией'
            },
            {
                type: ACTIONS.DECLINE,
                next_step: 'decline'
            }]
        },
        'Согласование с Бухгалтерией': {
            required_fields: [
                {
                    name: '',
                    type: FIELD_TYPE.DOCUMENT
                }
            ],
            actor: ACTORS.HEAD_OF_ACCOUNTING,
            actions: [{
                type: ACTIONS.AGREEMENT,
                next_step: 'Согласование с Юристом'
            },
            {
                type: ACTIONS.DECLINE,
                next_step: 'decline'
            }]
        },
        'Согласование с Юристом': {
            required_fields: [],
            actor: ACTORS.HEAD_OF_LAWYER,
            actions: [{
                type: ACTIONS.COMPLETE,
                next_step: 'finish'
            },
            {
                type: ACTIONS.DECLINE,
                next_step: 'decline'
            }]
        },
    }
}

const request: REQUEST = {
    id: 1,
    author: user,
    members: [user],
    date: new Date(),
    deadline: new Date(),
    title: 'Тестовая заявка',
    description: 'Проверочное описание',
    documents: [document],
    model: request_model,
    progress: {

    }
}

const filter: FILTER[] = [
    {
        id: 0,
        label: 'Все документы'
    },
    {
        id: 1,
        label: 'Требуют участия'
    },
    {
        id: 2,
        label: 'Выполненные'
    },
    {
        id: 3,
        label: 'Мои поручения'
    },
    {
        id: 4,
        label: 'На согласовании'
    },
    {
        id: 5,
        label: 'На доработке'
    },
    {
        id: 6,
        label: 'Черновики'
    },
    {
        id: 7,
        label: 'Отмененные'
    },
    {
        id: 8,
        label: 'Избранные'
    }
]

export default {department, document, user, request_model, filter}