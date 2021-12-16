'use strict';

// Callback Hell example
class UserStorage{
    // 1. 사용자 로그인
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'kastrio' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                } else {
                    reject(new Error('no access'));
                }
            }, 2000);
        });        
    }

    // 2. 사용자마다 가진 권한 서버에 요청해서 정보 받아옴
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'kastrio') {
                    resolve({name : 'kastrio', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

// 1. 사용자 입력받기 : id, pw
// 2. id, pw login
// 3. 성공 : 받아온 id를 이용한 role
// 4. 성공 : 사용자 object 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    // .then(user => userStorage.getRoles)
    .then(userStorage.getRoles)
    .then(user => alert(`hello, ${user.name}, you have a ${user.role}`))
    .catch(console.log);