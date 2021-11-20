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
//     avatar: "/img/_1631182607108",
//     email: "2810990752@qq.com",
//     grade: 2019,
//     nickname: "徐燕",
//     phone: "15528298905",
//     role: 2,
//     token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYdVlhbiIsImNyZWF0ZWQiOjE2MzU0NzMzODI2MzQsImV4cCI6MTYzNjc2OTM4Mn0.i-UGCHZxD3oh6CJm4IKsm3JTXgUSlTXAfPIC64jSWg4GQVwrcoLZl3YkcgzWwdRHaFODiwISMGnkoyzWoQroGg",
//     userid: 52,
//     username: "XuYan"
// });

export default storageUtils;