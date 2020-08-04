import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import marked from 'marked'
import hlt from 'highlight.js'
import { Row, Col, List, Icon, BackTop, Carousel } from 'antd'
import axios from 'axios'


import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import servicePath from '../config/apiURL'


export default function Home(list) {
  const [myList, setMyList] = useState(list.data)

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hlt.highlightAuto(code).value
    }
  })

  let markdown = '## 阅读须知\n' +
    '> 此博客内容仅为本人自己复习而用，不具有指导意义\n\n'

  const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <>
      <div >
        <Head>
          <title>BOLG</title>
        </Head>
      </div>
      <Header></Header>
      <Row className='comm-main' type='flex' justify='center'>
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className='list-context'
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
          <List
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className='list-title'>
                  <Link href={{ pathname: `/${item.typeName.toLowerCase()}/detailed/`, query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className='list-icon'>
                  <span><Icon type='calendar' /> {item.addTime}</span>
                  <span><Icon type='folder' /> {item.typeName}</span>
                  <span><Icon type='fire' /> {item.view_count}人</span>
                </div>
                <div className='list-context'
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
      <BackTop />
    </>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resovle, reject) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resovle(res.data)
      }
    )
  })
  return await promise
}
