import store from 'store';
import { USER_KEY,START_TIME } from "./constants";

const storageUtils={
    //添加用户
    addUser:user=>store.set(USER_KEY,user),
    //获取用户
    getUser:()=>store.get(USER_KEY)||{},
    //删除用户
    removeUser:()=>store.remove(USER_KEY),
    //添加登录时间戳
    addStartTime:time=>store.set(START_TIME,time),
    //获取时间戳
    getStartTime:()=>store.get(START_TIME)
}

// storageUtils.addUser({
//     avatar: "/img/_1636203766476",
//     email: "2810990752@qq.com",
//     grade: 2019,
//     nickname: "徐燕",
//     phone: "15528298905",
//     role: 2,
//     token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYdVlhbiIsImNyZWF0ZWQiOjE2NDI2NTU1NDY3NzIsImV4cCI6MTY0Mzk1MTU0Nn0.Ixj0tbIT9dhtue5EWb1HE_mZm8sW993-4atl8II84w-VOwysdorzJaDpzbrnluSYcSdYReHSThAh3c0Xe7z1NA",
//     userid: 52,
//     username: "XuYan"
// });

export default storageUtils;