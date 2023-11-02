import { faHouse, faRightFromBracket, faCalendar, faChartColumn, faUsers, faCompass, faFile } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const MENU_LIST = [
    {
        icon: () => {return <FontAwesomeIcon icon={faHouse} />},
        label: 'Домашняя страница'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faFile} />},
        label: 'Документы'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faCalendar} />},
        label: 'Календарь'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faChartColumn} />},
        label: 'Отчеты'
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faUsers} />},
        label: 'Пользователи'
    } 
]

export const MENU_BTN = {
    icon: () => {return <FontAwesomeIcon icon={faCompass} />},
    label: 'Скрыть'
} 

export const MENU_USER_MENU = [
    {
        icon: () => {return <FontAwesomeIcon icon={faUser} />},
        label: ''
    },
    {
        icon: () => {return <FontAwesomeIcon icon={faRightFromBracket} />},
        label: 'Выйти'
    }
]
