import React, {useState} from "react";
import {menuItems} from "../../constants/constants";
import styles from "./Menu.module.scss"
import cn from 'classnames'

const Menu = () => {

    const [active,setActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState(2)

    return <div className={styles.menuWrapper}>
        <div className={cn(styles.background, {[styles.active] : active})}/>
        <div className={styles.container}
             onMouseLeave={() => setActive(false)}
             onMouseEnter={() => setActive(true)}>
            <div className={styles.compact}>
                <div className={styles.body}>
                    {menuItems.map((item, index) => {
                        return <div  className={cn(styles.itemsContainer, {[styles.selected]: selectedItem === item.id})} key={index}>
                            <img src={item.img} alt={"img"}/>
                        </div>
                    })}
                </div>
            </div>

            <div className={styles.opened}>
                <div className={styles.head}>
                    <div className={styles.avatarContainer}/>
                    <span>Daniel</span>
                </div>
                <div className={styles.body}>
                    {menuItems.map((item, index) => {
                        return <div onClick={() => setSelectedItem(item.id)} className={cn(styles.itemsContainer, {[styles.openedSelected] : selectedItem ===item.id})} key={index}>
                            <img src={item.img} alt={"img"}/>
                            <span className={styles.title}>{item.title}</span>
                        </div>
                    })}
                </div>
                <div className={styles.footer}>
                    <p>Language</p>
                    <p>Get Help</p>
                    <p>Exit</p>
                </div>
            </div>
        </div>
    </div>
}

export default Menu
