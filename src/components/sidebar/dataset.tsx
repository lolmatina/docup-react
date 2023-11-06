import { faHouse, faRightFromBracket, faCalendar, faChartColumn, faUsers, faCompass, faFile } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const MENU_LIST = [
    {
        icon: () => {return <FontAwesomeIcon icon={faHouse} />},
        label: 'Домашняя страница',
        link: 'home'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faFile} />},
        label: 'Документы',
        link: 'documents'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faCalendar} />},
        label: 'Календарь',
        link: 'calendar'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faChartColumn} />},
        label: 'Отчеты',
        link: 'reports'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faUsers} />},
        label: 'Пользователи',
        link: 'users'
    } 
]

export const MENU_BTN = {
    icon: () => {return <FontAwesomeIcon icon={faCompass} />},
    label: 'Скрыть',
    link: ''
} 

export const MENU_USER_MENU = [
    {
        icon: () => {return <FontAwesomeIcon icon={faUser} />},
        label: '',
        link: ''
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faRightFromBracket} />},
        label: 'Выйти',
        link: 'logout'
    }
]
