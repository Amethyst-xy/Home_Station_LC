import store from 'store';
import { USER_KEY } from "./constants";

const storageUtils={
    //添加用户
    addUser:user=>store.set(USER_KEY,user),
    //获取用户
    getUser:()=>store.get(USER_KEY)||{},
    //删除用户
    removeUser:()=>store.remove(USER_KEY)
}

// storageUtils.addUser({
//     avatar: "/img/_1636203766476",
//     email: "2810990752@qq.com",
//     grade: 2019,
//     nickname: "徐燕",
//     phone: "15528298905",
//     role: 2,
//     token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYdVlhbiIsImNyZWF0ZWQiOjE2MzgxODI0MTQxNzYsImV4cCI6MTYzOTQ3ODQxNH0.kfDbG3xdiY1BFwAPbUc2ER1WX4mvyyb5bjzjuNJaUFyjCyas8hhT3M4QsO2RqvtLoGMZVJIGEmBiae9LqJQWOQ",
//     userid: 52,
//     username: "XuYan"
// });

export default storageUtils;