import React from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import styles from './IndexPage.min.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.routerJump = this.routerJump.bind(this);
  }
  routerJump(nav, query, e) {
    e.preventDefault();
    this.props.dispatch(
      routerRedux.push({
        pathname: nav,
        query: queryString.stringify(query)
      })
    );
  }
  render() {
    const navList = [
      {
        router: "/",
        title: "首页"
      },
      {
        router: "/products",
        title: "列表"
      }
    ];
    const banners = [
      {
        src: require("../assets/aisha.jpg"),
        title: "冰雪奇缘-艾莎女王"
      },
      {
        src: require("../assets/2b.jpg"),
        title: "尼尔纪元-2b小姐姐"
      }
    ];
    const navItems = navList.map((nav) =>
      <li onClick={(e) => this.routerJump(nav.router, nav, e)}>{nav.title}</li>
    );
    const bannerItems = banners.map((banner) =>
      <div className={styles.index_banner_item}>
        <img src={banner.src} />
      </div>
    );
    return (
      <div id="index_container" className={styles.index_container}>
        <header className={styles.index_header}>
          <div className={styles.index_logo}>
            <img src={require("../assets/yay.jpg")} />
          </div>
          <ul className={styles.index_nav_list}>
            {navItems}
          </ul>
        </header>
        <Carousel autoplay>
          {bannerItems}
        </Carousel>
      </div>
    );
  }
}

export default connect()(IndexPage);
