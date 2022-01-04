import React, {Component} from "react";
import { MenuItems } from "./menuItems";
import './navBar.css';
import logo from './img/logo-white.png';



class Navbar extends Component {
    state = {clicked: false}

    handleClick = () =>{
        alert('dfdffdfdfdfdfdfd'); 
    }

    render() {
        return (
            <nav className="NavbarItems">
                <ul className="ul-logo"><li><img src={logo} height={40}/></li><li><img src={logo} height={40}/></li><li><img src={logo} height={40}/></li></ul>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar