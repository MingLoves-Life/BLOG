
import React, { useState, useEffect } from 'react'
import { Avatar, Divider, notification, Button, Statistic, message } from 'antd'
import axios from 'axios'

import servicePath from '../config/apiURL'

const text = '本人微信号：Ahogimn-0405';

function Author() {


  const [allCount, setAllCount] = useState(0)
  useEffect(() => {
    let viewCount = 0
    const getList = async () => {
      const result = await axios(servicePath.getArticleList).then(
        (res) => {
          res.data.data.map((item) => {
            viewCount += item.view_count
          })
          setAllCount(viewCount)
        }
      )
    }
    getList()
  }, [])

  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        知道了
      </Button>
    );
    notification.open({
      message: '本人微信',
      description:
        'Ahogimn-0405（轻易不要加，谢谢）',
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <div className='author-div comm-box'>
      <div><Avatar size={100} src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=363637414,3913883749&fm=26&gp=0.jpg' /></div>
      <div className='author-introduction'>寻求工作中<br />联系邮箱：229417486@qq.com</div>
      <Statistic title="文章浏览总次数" value={allCount} />
      <Divider>社交帐号</Divider>
      <a href='https://github.com/MingLoves-Life'><Avatar size={28} icon='github' className='account' /></a>

      <Avatar size={28} icon='wechat' className='account' onClick={openNotification} />
    </div>
  )
}



export default Author