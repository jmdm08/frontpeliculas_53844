export const URL_API = 'http://localhost:3500/api';

export function getToken(){
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth.token; 
}