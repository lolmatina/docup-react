import DEPARTMENT from './department'
import USER from './user'
import REQUEST from './request'
import REQUEST_MODEL from './request_model'
import DOCUMENT from './document'

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

const request: REQUEST = {
    id: 1,
    author: user,
    members: [user],
    date: new Date(),
    deadline: new Date(),
    title: 'Тестовая заявка',
    description: 'Проверочное описание',
    documents: [document],
    model: 
}

JSON