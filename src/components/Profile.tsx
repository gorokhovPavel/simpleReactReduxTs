import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IReducerState } from '../store/types'

interface IProfileProps extends IStateToProps {

}

const profile:React.FC<IProfileProps> = (props) => {

    let authCheck: JSX.Element|null = null;
    if (!props.isAuth) {
        authCheck = <Redirect to='/login'/>
    }

    return (
        <div>
            {authCheck}
            <div>Profile</div>
        </div>
    )
}
interface IStateToProps {
    isAuth: boolean;
}

const mapStateToProps = (state: IReducerState): IStateToProps => {
    return {
        isAuth: state.authenticated,
    }
};


export default connect(mapStateToProps)(profile);