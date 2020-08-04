import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Icon, Dropdown } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'

import servicePath from '../config/apiURL'

const { SubMenu } = Menu;

const Header = () => {
    const [navArray, setNavArray] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {

                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    const handleClick = (e) => {
        if (e.key === '0') {
            Router.push('/')
        } else if ((e.key === '1')) {
            Router.push('/html')
        } else if ((e.key === '2')) {
            Router.push('/css')
        } else if ((e.key === '3')) {
            Router.push('/js')
        } else if ((e.key === '4')) {
            Router.push('/react')
        } else if ((e.key === '5')) {
            Router.push('/http')
        } else if ((e.key === '6')) {
            Router.push('/other')
        }
    }


    return (
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className='header-logo'>Ming Loves Life</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal' onClick={handleClick}>
                        <Menu.Item key='0'>
                            <Icon type='home' />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="html5" />技术合集 </span>}>
                            {
                                navArray.map((item) => {
                                    return (
                                        <Menu.Item key={item.Id} >
                                            <span>{item.typeName}</span>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                    </Menu>

                </Col>
            </Row>
        </div>
    )
}
export default Header