import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Icon, Breadcrumb, Affix ,BackTop} from 'antd'
import marked from 'marked'
import hlt from 'highlight.js'
import axios from 'axios'
import { useEffect } from 'react'

import Header from '../../components/Header'
import Author from '../../components/Author'
import Advert from '../../components/Advert'
import Footer from '../../components/Footer'
import Tocify from '../../components/tocify.tsx'
import servicePath from '../../config/apiURL'


function Detailed(props) {

  useEffect(() => {
    let dataProps = {}
    dataProps.id = props.id
    dataProps.view_count = props.view_count + 1
    axios({
      method: 'post',
      url: servicePath.updateViewCount,
      header: { 'Access-Control-Allow-Origin': '*' },
      data: dataProps,
      withCredentials: true
    }).then(
      res => {
       
      }
    )
  }, [])

  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  renderer.heading = function (text, level, raw) {
    const anthor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
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

  let html = marked(props.article_content)

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
          <div>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link href={{ pathname: `/${props.typeName.toLowerCase()}` }}>{props.typeName}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className='detailed-title'>
              {props.title}
          </div>
          <div className='list-icon' >
              <span><Icon type='calendar' /> {props.addTime}</span>
              <span><Icon type='folder' /> {props.typeName}</span>
              <span><Icon type='fire' />{props.view_count}</span>
            </div>
            <div className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}>

            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
      <BackTop />
    </>
  )
}
Detailed.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve, reject) => {
    axios(servicePath.getArticleById + id).then(
      (res) => {
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}
export default Detailed