import React,{useEffect,useCallback} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Celebrities from './pages/celebrities';
import Goals from "./pages/goals";
import Financial from "./pages/finacial";
import SummaryDetail from "./pages/summary_detail";
import RewardPunishment from './pages/punishments';
import HistoryOfLc from "./pages/history_lc";
import Manage from './pages/manage';
import Space from './pages/space';
import Album from './pages/album';
import UpdateUserInfo from './pages/space/components/userinfo_update';
import SummaryAddOrUpdate from './pages/summary-add';
import AlbumDetail from './pages/album-detail';
import TeamMembers from "./pages/members";
import HistoryNews from './pages/history_news';
import IntroductionDoc from "./pages/docs";
import Test from './pages/test';
import 'animate.css';
import storageUtils from './utils/storageUtils';
import {reqQueryAvatar} from './api';

function App() {
  const {userid,role}=storageUtils.getUser();
  storageUtils.addStartTime(Date.now());

  const isTokenValid=()=>{
    const startTime=storageUtils.getStartTime();
    const now=Date.now();
    if((now-startTime)/(1000*60*60*24)>=3) return false;
    return true;
  }

  //若token过期
  if(!isTokenValid()){
    storageUtils.removeUser();
    //无法跳转。。？
  }

  //获取角色
  const getAvatarRole = useCallback(async () => {
    const res = await reqQueryAvatar(userid);
    if (res.code === 1) {
        if(res.data){
            const user_role=res.data.role;
            //判断角色是否更新
            if(role!==user_role){
                //通过，修改缓存
                const local_user=storageUtils.getUser();
                local_user.role=user_role;
                storageUtils.addUser(local_user);
            }
        }
      }
  }, [userid,role]);

  useEffect(() => {
    getAvatarRole();
  }, [getAvatarRole])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/celebrities' exact component={Celebrities}></Route>
        <Route path='/goals' exact component={Goals}></Route>
        <Route path='/financial' component={Financial}></Route>
        <Route path='/summary_detail' component={SummaryDetail}></Route>
        <Route path='/history' component={HistoryOfLc}></Route>
        <Route path='/reward_punishment' component={RewardPunishment}></Route>
        <Route path='/manage' component={Manage}></Route>
        <Route path='/space/updateuserinfo'  component={UpdateUserInfo}></Route>
        <Route path='/space/summaryadd' component={SummaryAddOrUpdate}></Route>
        <Route path='/space' component={Space}></Route>    
        <Route path='/album/detail'component={AlbumDetail} />
        <Route path='/album' component={Album}></Route>
        <Route path='/members' component={TeamMembers}></Route>
        <Route path='/history_news' component={HistoryNews}></Route>
        <Route path='/docs' component={IntroductionDoc}></Route>
        <Route path='/test' component={Test}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
