import React from 'react';
import { enquire } from 'enquire-js';

import Content5 from './Content5';
import Nav from './Nav';
import Content6 from './Content6';
import Content1 from './Content1';
import Content0 from './Content0';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content7 from './Content7';
import Content8 from './Content8';
import Content9 from './Content9';
import Content10 from './Content10';
import Footer from './Footer';

import './less/antMotion_style.less';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });

    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  };

  render() {
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMode={this.state.isMode} />,
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode} />,
      <Content5 id="content_10_0" key="content_10_0" isMode={this.state.isMode} />,
      <Content6 id="content_9_0" key="content_9_0" isMode={this.state.isMode} />,
      <Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode} />,
      <Content2 id="content_3_0" key="content_3_0" isMode={this.state.isMode} />,
      <Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode} />,
      <Content4 id="content_1_0" key="content_1_0" isMode={this.state.isMode} />,
      <Content7 id="content_5_0" key="content_5_0" isMode={this.state.isMode} />,
      <Content8 id="content_6_0" key="content_6_0" isMode={this.state.isMode} />,
      <Content9 id="content_7_0" key="content_7_0" isMode={this.state.isMode} />,
      <Content10 id="content_8_0" key="content_8_0" isMode={this.state.isMode} />,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
