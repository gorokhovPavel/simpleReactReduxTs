import {
    SUCCESSFUL_LOGIN,
    UNSUCCESSFUL_LOGIN,
    ICheckCredentials
} from './types'

export const credentialChecker = (username:string, password:string): ICheckCredentials => {
    if(username === 'Admin' && password === "12345") {
        return {
            type: SUCCESSFUL_LOGIN
        }

    } else {
        return {
            type: UNSUCCESSFUL_LOGIN
        }
    }
}
