import { MENU_LIST, MENU_BTN, MENU_USER_MENU } from "./dataset";
import Button from "./Button/Button";
import React from "react";
import "./styles.css"

type State = {
    selected: number
}

class Sidebar extends React.Component<{}, State> {
    state: State = {
        selected: 0
    }

    render(): React.ReactNode {
        return <aside className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <ul className="sidebar-menu-wrapper">
                        <Button onClick={() => {}}
                        icon={MENU_BTN.icon}
                        label={MENU_BTN.label}
                        selected={false}/>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <ul className="sidebar-menu-wrapper">
                        {MENU_LIST.map((value, index) => {
                        return <Button onClick={() => {
                                this.setState(() => ({selected: index}))
                            }} 
                            icon={value.icon} 
                            label={value.label} 
                            selected={this.state.selected == index} 
                            key={index}/>
                        })}   
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <ul className="sidebar-menu-wrapper">
                        {MENU_USER_MENU.map((value, index) => {
                        return <Button onClick={() => {}} 
                            icon={value.icon} 
                            label={value.label} 
                            selected={false} 
                            key={index}/>
                        })}   
                    </ul>
                </div>
            </div>
        </aside>
    }
}

export default Sidebar;