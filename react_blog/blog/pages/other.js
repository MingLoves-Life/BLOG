import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import marked from 'marked'
import hlt from 'highlight.js'
import axios from 'axios'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import servicePath from '../config/apiURL'
import Link from 'next/link'
function myOtherList(list) {
  const [myList, setMyList] = useState(list.data)
  useEffect(() => {
    setMyList(list.data)
  })

  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hlt.highlightAuto(code).value
    }
  })
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
          <div className='bread-div'>
            <Breadcrumb>
              <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>Other</Breadcrumb.Item>
            </Breadcrumb>
          </div>
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
    </>
  )
}

myOtherList.getInitialProps = (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getOtherList).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return promise
}

export default myOtherList