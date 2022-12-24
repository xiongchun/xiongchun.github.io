import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import Head from '@docusaurus/Head'

const svgList = [
  {
    title: 'github',
    Svg: require('../../static/img/github.svg').default,
    color: 'black',
    link: 'https://gitee.com/xiong-chun',
  },
  {
    title: 'bilibili',
    Svg: require('../../static/img/bilibili.svg').default,
    link: 'https://space.bilibili.com/1517598861',
  },
  {
    title: 'wechat',
    Svg: require('../../static/img/wechat.svg').default,
    color: '#2979ff',
    link: '../../img/wechat.png',
  },
]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          Always <br /> On the Road.
        </h1>
        <p className={styles.leftContainer_p}>
          一个中老年程序员，
          <br />
          在自己的一亩三分地上记录和分享知识......
        </p>
        <div className={styles.buttonContainer}>
          <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src='../../img/hero.jpg'></img>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <Layout
      title='首页'
      description='盘古开发框架 盘古通用权限系统 开源中后台业务脚手架 pangu-admin  分布式微服务架构 垂直单体分层架构 普蓝开源社区'>
      <Head>
      </Head>
      <main>
        <MyHero />
      </main>
    </Layout>
  )
}
