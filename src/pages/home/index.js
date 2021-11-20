import React,{useRef} from 'react';
import Header from './components/header';
import Full from "./components/full";
import {Modal} from 'antd';
import './index.less';
import { createFromIconfontCN } from '@ant-design/icons';
import {IMG_BED_URL} from '../../utils/constants';
import storageUtils from '../../utils/storageUtils';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2739025_0ggl0demqiwq.js',
});

export default function Home(){
  const fullRef=useRef();
  const hRef=useRef();
  const role=storageUtils.getUser().role;

  const content=(
      <img src={IMG_BED_URL+'ico.jpg'} alt='ico' style={{width:'200px'}}></img>
  );

  const moveToPage=(page)=>{
    fullRef.current.fullpageApi.moveTo(page);
    //如果是第一屏，显示header
    // if(page===1){
    //   hRef.current.showHeader(true);
    // }else{
    //   hRef.current.showHeader(false);
    // }
  }

  //展示二维码
  const showIco=()=>{
      Modal.info({
      content,
      okText:'关闭'
      })
  }

  return (
    <div>
      <Header moveToPage={moveToPage} ref={hRef}/>
      <Full ref={fullRef}/>
      <div className='side_bar'>
        <ul className='side_list'>
          <li>
          {
            role?(
              <a className='side_item' href='http://47.108.228.4/' target='_blank' rel='noreferrer'>
                <IconFont type='icon-kaoqin' className='side_icon'/>打卡系统
              </a>
            ):(
              <p className='side_item'>
                <IconFont type='icon-qun' className='side_icon'/>招新群:1436154
              </p>
            )
          }
          </li>
          <li>
            <p className='side_item'>
              <IconFont type='icon-qq' className='side_icon'/>客服:2810990752
            </p>
          </li>
          <li>
            <p className='side_item' onClick={showIco}>
              <IconFont type='icon-ico' className='side_icon'/><span>q群二维码</span>
            </p>
          </li>
          <li onClick={()=>{moveToPage(1)}}>
            <a className='side_item' href='#firstPage'>
              <IconFont type='icon-huidaodingbu' className='side_icon'/>返回顶部
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}