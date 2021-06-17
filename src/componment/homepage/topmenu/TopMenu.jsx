import React from 'react'
import { Menu } from 'antd'
import { GitlabFilled, MediumSquareFilled, CrownFilled } from '@ant-design/icons'
import './TopMenuStyle.css'

export default class TopMenu extends React.Component {

    state = {
        current : 'homepage',
    }

    handleClick = e => {
        console.log('click', e.key);
        this.setState({ current: e.ksy });
        this.props.changeAction(e.key);
    }

    render() {
        const { current } = this.state;
        return (<div className="TopMenuStyle">
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
                <Menu.Item key="homepage" icon={<GitlabFilled />} >
                    Homepage
            </Menu.Item>
                <Menu.Item key="wikipage" icon={<MediumSquareFilled />} >
                    wikipage
            </Menu.Item>
                <Menu.Item key="blogpage" icon={<CrownFilled />} >
                    blogpage
            </Menu.Item>
            </Menu>
        </div>)
    }
}