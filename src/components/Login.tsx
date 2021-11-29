import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { credentialChecker } from '../store/actions';
import { Redirect } from 'react-router-dom';
import { IReducerState } from '../store/types'

interface ILoginProps extends IStateToProps, IDispatchToProps {

}

const login:React.FC<ILoginProps> = (props) => {
    const [username, setUsername] = React.useState({username: ''});
    const [password, setPassword] = React.useState({password: ''});

    const submitCredentialsHandler = () => {
        props.onAuthenticationAttempt(username.username, password.password)

    }

    const enterKeyHandler = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === 13) {
            submitCredentialsHandler();
        }
    }

    let authRedirect:JSX.Element|null = null;
    if (props.isAuth) {
        authRedirect = <Redirect to='/profile'/>
    }

    return (
        <div className='container' onKeyDown={enterKeyHandler}>
            {authRedirect}
            <input type='text' placeholder='username' value={username.username} onChange={e => setUsername({username: e.target.value})}/>
            <input type='password' placeholder='password' value={password.password} onChange={e => setPassword({password: e.target.value})}/>
            <button onClick={submitCredentialsHandler} >Signin</button>
            {props.isAuth ? <p>Logged in!</p>: null}
            {props.isError ? <p>incorrect credentials</p>: null}
        </div>
    )

};

interface IStateToProps{
    isAuth: boolean;
    isError: boolean;
}

const mapStateToProps = (state:IReducerState): IStateToProps => {
    return {
        isAuth: state.authenticated,
        isError: state.loginError
    }
};

interface IDispatchToProps {
    onAuthenticationAttempt: (usrn:string, pwd:string) => {type:string}
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): IDispatchToProps => {
    return {
        onAuthenticationAttempt: (usrn, pwd) => dispatch(credentialChecker(usrn, pwd))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(login);