import { MENU_LIST, MENU_BTN, MENU_USER_MENU } from './dataset';
import Button from './Button/Button';
import React from 'react';
import './styles.css'

type State = {
    selected: number,
    active: boolean
}

class Sidebar extends React.Component<{}, State> {
    state: State = {
        selected: 0,
        active: false
    }

    render(): React.ReactNode {
        return <aside className={'sidebar ' + (!this.state.active? 'active': '')}>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <ul className='sidebar-menu-wrapper'>
                        <Button onClick = {() => {
                                this.setState(() => ({active: !this.state.active}))
                            }} 
                        icon={MENU_BTN.icon}
                        label={MENU_BTN.label}
                        selected={false}
                        link={MENU_BTN.link}/>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <ul className='sidebar-menu-wrapper'>
                        {MENU_LIST.map((value, index) => {
                        return <Button onClick={() => {
                                this.setState(() => ({selected: index}))
                            }} 
                            icon={value.icon} 
                            label={value.label} 
                            selected={this.state.selected == index} 
                            key={index}
                            link={value.link}/>
                        })}   
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <ul className='sidebar-menu-wrapper'>
                        {MENU_USER_MENU.map((value, index) => {
                        return <Button onClick={() => {}} 
                            icon={value.icon} 
                            label={value.label} 
                            selected={false} 
                            key={index}
                            link={value.link}/>
                        })}   
                    </ul>
                </div>
            </div>
        </aside>
    }
}

export default Sidebar;