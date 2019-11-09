import request from 'axios'
import axios from 'axios'
import { Message } from 'element-ui'
//登录获取Token
// http response 响应拦截器
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                Message.error({ message: '账号或密码错误' });
            case 401:
                Message.error({ message: '未登录！请登录！' });
            case 503:
                Message.error({ message: '服务器被吃了⊙﹏⊙∥' });
        }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error);
});

export function login(username, password) {
    var Info = new FormData();
    var grant_type = "password",
        client_id = "client",
        client_secret = "secret";
    Info.append('grant_type', grant_type);
    Info.append('username', username);
    Info.append('password', password);
    Info.append('client_id', client_id);
    Info.append('client_secret', client_secret);
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        data: Info,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}