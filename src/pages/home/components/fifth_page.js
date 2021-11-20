import React from 'react';
import '../index.less';

export default function FifthPage(props){

    return (
        <div className='fifth_page_wrapper'>
            <div className='dots_bg'></div>
            <div className='fifth_con'>
                <div className='fifth_top'>
                    <p className='font_l'><span>L</span></p>
                    <p className='font_c'><span>程</span></p>
                </div>
                <div className='fifth_footer'>
                    <p>地点：明理楼C1010 乐程软件工作室</p>
                    <div className='footer_mid'>
                        <div className='footer_links'>
                            <dl>
                                <dt className='links'>友情链接</dt>
                            </dl>
                            <dl>
                                <dt>博客链接</dt>
                                <dd><a href='https://blog.csdn.net/Kobe_G?spm=1001.2014.3001.5509' target='_blank' rel="noreferrer">龚皓</a></dd>
                                <dd><a href='https://blog.csdn.net/qq_44685099?spm=1001.2014.3001.5509' target='_blank' rel="noreferrer">文磊</a></dd>
                                <dd><a href='http://123.57.249.198:8081/' target='_blank' rel="noreferrer">赵宇</a></dd>
                                <dd><a href='https://codespi.github.io/' target='_blank' rel="noreferrer">叶尤晟</a></dd>
                            </dl>
                            <dl>
                                <dt>更多服务</dt>
                                <dd><a href='/history#feedback'>提交反馈</a></dd>
                            </dl>
                        </div>
                        <p>Copyright © 2021 - 2022 LeCheng. All Rights Reserved. 乐程软件工作室 版权所有</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}