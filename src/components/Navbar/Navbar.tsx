import * as React from 'react';
import * as Redux from 'redux';
import NavItem from './NavItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { IReducerState, LOG_OUT } from '../../store/types'

interface INavbarProps extends IStateToProps, IDispatchToProps {
}

const navbar: React.FC<INavbarProps> = props => (
    <div>
        <AppBar position='static' color='default'>
            <Toolbar>
                <NavItem to='/' label='Home'/>
                <NavItem to='/news' label='News'/> 
                <NavItem to='/profile' label='Profile'/>
                {props.isAuth ? 
                    <Button onClick={props.onLogOut} variant='outlined' color='primary'><span>Logout</span></Button> 
                    : <NavItem to='/login' label='Login'/>}
            </Toolbar>
        </AppBar> 
    </div>
);

interface IStateToProps {
    isAuth: boolean;
}

const mapStateToProps = (state:IReducerState): IStateToProps => {
    return {
        isAuth: state.authenticated
    }
};

interface IDispatchToProps {
    onLogOut?: () => {type:string}
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): IDispatchToProps => {
    return {
        onLogOut: () => dispatch({type: LOG_OUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);