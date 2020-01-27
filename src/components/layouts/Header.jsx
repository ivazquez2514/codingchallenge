import React, { Component } from "react";
import Logo from "../../assets/img/logo.png";
import { connect } from "react-redux";
import changeMenuStatusAction from '../../store/actions/ui/change-menu-status';

class Header extends Component {

    render() {

        const { changeMenuStatus } = this.props;

        return (
            <header className="header">
                <img
                    className="header__logo"
                    src={ Logo }
                    alt="Billpocket"/>
                <i class="material-icons" onClick={ () => changeMenuStatus(true) }>menu</i>
            </header>
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
)(Header);