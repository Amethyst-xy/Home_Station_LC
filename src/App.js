import React, { useEffect, useCallback, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'animate.css';
import storageUtils from './utils/storageUtils';
import { reqQueryAvatar } from './api';
const Login = React.lazy(() => import('./pages/login'));
const Home=React.lazy(()=>import('./pages/home'));
const Celebrities=React.lazy(()=>import('./pages/celebrities'));
const Goals=React.lazy(()=>import('./pages/goals'));
const Financial=React.lazy(()=>import('./pages/finacial'));
const SummaryDetail=React.lazy(()=>import('./pages/summary_detail'));
const RewardPunishment=React.lazy(()=>import('./pages/reward-punish'));
const HistoryOfLc=React.lazy(()=>import('./pages/history_lc'));
const Manage=React.lazy(()=>import('./pages/manage'));
const Space=React.lazy(()=>import('./pages/space'));
const Album=React.lazy(()=>import('./pages/album'));
const UpdateUserInfo=React.lazy(()=>import('./pages/space/components/userinfo_update'));
const SummaryAddOrUpdate=React.lazy(()=>import('./pages/summary-add'));
const AlbumDetail=React.lazy(()=>import('./pages/album-detail'));
const TeamMembers=React.lazy(()=>import('./pages/members'));
const HistoryNews=React.lazy(()=>import('./pages/history_news'));
const IntroductionDoc=React.lazy(()=>import('./pages/docs'));


function App() {
  const { userid, role } = storageUtils.getUser();

  const isTokenValid = () => {
    const startTime = storageUtils.getStartTime();
    const now = Date.now();
    if ((now - startTime) / (1000 * 60 * 60 * 24) >= 3) return false;
    return true;
  }

  //若token过期
  if (!isTokenValid()) {
    storageUtils.removeUser();
    //跳转到login
  }

  //获取角色
  const getAvatarRole = useCallback(async () => {
    const res = await reqQueryAvatar(userid);
    if (res.code === 1) {
      if (res.data) {
        const user_role = res.data.role;
        //判断角色是否更新
        if (role !== user_role) {
          //通过，修改缓存
          const local_user = storageUtils.getUser();
          local_user.role = user_role;
          storageUtils.addUser(local_user);
        }
      }
    }
  }, [userid, role]);

  useEffect(() => {
    getAvatarRole();
  }, [getAvatarRole])

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/celebrities' exact component={Celebrities}></Route>
          <Route path='/goals' exact component={Goals}></Route>
          <Route path='/financial' component={Financial}></Route>
          <Route path='/summary_detail' component={SummaryDetail}></Route>
          <Route path='/history' component={HistoryOfLc}></Route>
          <Route path='/reward_punishment' component={RewardPunishment}></Route>
          <Route path='/manage' component={Manage}></Route>
          <Route path='/space/updateuserinfo' component={UpdateUserInfo}></Route>
          <Route path='/space/summaryadd' component={SummaryAddOrUpdate}></Route>
          <Route path='/space' component={Space}></Route>
          <Route path='/album/detail' component={AlbumDetail} />
          <Route path='/album' component={Album}></Route>
          <Route path='/members' component={TeamMembers}></Route>
          <Route path='/history_news' component={HistoryNews}></Route>
          <Route path='/docs' component={IntroductionDoc}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
