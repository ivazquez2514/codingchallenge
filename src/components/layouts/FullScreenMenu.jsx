import React, { Component } from "react";
import { connect } from "react-redux";
import changeMenuStatusAction from '../../store/actions/ui/change-menu-status';

class FullScreenMenu extends Component {
    render() {
        const { ui, changeMenuStatus } = this.props;
        
        return (
            <nav className={`full-screen-menu full-screen-menu--${ ui.menuStatus ? 'opened' : 'closed' }`}>
                <a className="full-screen-menu__close_btn" onClick={ () => changeMenuStatus(false) }>&times;</a>
                <ul className="full-screen-menu__menu">
                    <li className="full-screen-menu__menu__item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="full-screen-menu__menu__item">
                        <a href="#">Nosotros</a>
                    </li>
                    <li className="full-screen-menu__menu__item">
                        <a href="#">Productos</a>
                    </li>
                    <li className="full-screen-menu__menu__item">
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    ui: state.ui
})

const mapDispatchToProps = dispatch => ({
    changeMenuStatus: menuStatus => dispatch(changeMenuStatusAction(menuStatus))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullScreenMenu);