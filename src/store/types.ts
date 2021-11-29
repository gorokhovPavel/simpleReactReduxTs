export interface INewsItem {
    author: string;
    title: string; 
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string; 
    content: string;
}

export interface IReducerState {
    authenticated: boolean;
    loginError: boolean;
    news: INewsItem[];
}

export const SUCCESSFUL_LOGIN:string = 'SUCCESSFUL_LOGIN';
export const UNSUCCESSFUL_LOGIN:string = 'UNSUCCESSFUL_LOGIN';
export const LOG_OUT:string = 'LOG_OUT';
export const STORE_NEWS:string = 'STORE_NEWS';

export interface ICheckCredentials {
    type: typeof SUCCESSFUL_LOGIN | typeof UNSUCCESSFUL_LOGIN
}

export interface IActionTypes {
    type: string;
    payload: INewsItem[];
}