import DEPARTMENT from './department'
import USER from './user'
import REQUEST from './request'
import REQUEST_MODEL from './request_model'
import DOCUMENT from './document'
import FILTER from './filter'
import FIELD_TYPE from './field_types'

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
                    name: 'Назначение платежа',
                    type: FIELD_TYPE.DESCRIPTION
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
                    name: 'Конечная дата оплаты',
                    type: FIELD_TYPE.DEADLINE
                },
                {
                    name: 'Дополнительные основания платежа',
                    type: FIELD_TYPE.DOCUMENT
                }
            ],
            actions: [{
                type: ACTIONS.SUBMIT,
                next_step: ''
            }]

        },
        'Согласование с руководителем инициатора': {
            required_fields: [],
            actions: [{
                type: ACTIONS.AGREEMENT,
                next_step: ''
            },
            { 
                type: ACTIONS.DECLINE,
                next_step: ''
            }] 
        }
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
    model: {
        id: 0,
        name: 'Заявка на оплату',
        model: {
            0: {
                action: 
            }
        }
    }
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

export default {department, document, user, filter}