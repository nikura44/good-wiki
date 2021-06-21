import React from 'react'

import {List, Avatar, Space, Button, Divider} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import api from './../../api/index'
import NicolasImg from './../../resource/coco.jpg'
import './wikiStyle.css'
import BlogCreate from "../blogpage/BlogCreate";

// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


export default class ListShow extends React.Component {

    constructor(){
        super()
        this.state = {
            listData : [],
            show : 'list',
            wikiPage : {},
        }
    }

    componentDidMount() {

        api.showWikiList().then(res => {
            this.setState({listData : res})
            console.log(this.state.listData)
        })

    }

    handleClick = (select) => {
        this.setState({wikiPage : select});
        this.setState({show : 'wikiContent'});
    }

    returnToPageList = () => {
        this.setState({show : 'list'});
    }

    updateBlog = () => {
        this.setState({show : 'updateBlog'});
    }


    render(){
        if (this.state.show === 'list') {
            return (<List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={this.state.listData}
                // footer={
                //   <div>
                //     <b>ant design</b> footer part
                //   </div>
                // }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={NicolasImg}/>}
                            title={<Button onClick={() => this.handleClick(item)}>{item.title}</Button>}
                            description={item.username}
                        />
                        {/* <div dangerouslySetInnerHTML = {{__html:}}></div> */}
                        {item.description}
                    </List.Item>
                )}
            />)
        }
        if (this.state.show === 'wikiContent') {
            const htmlString = this.state.wikiPage.pageInfo;
            const title = this.state.wikiPage.title;
            const author = this.state.wikiPage.username;
            const theme = this.state.wikiPage.description;
            return <div>
                <Button onClick={this.returnToPageList}>返回文章列表</Button>
                <Button className="updateButton" onClick={this.updateBlog} type="primary">更新文章</Button>
                <Divider>Title</Divider>
                <h1 align="center">{title}</h1>
                <p align="center">{theme} | created by {author}</p>
                <Divider>Content</Divider>
                <div dangerouslySetInnerHTML = {{__html: htmlString}} />
            </div>
        }
        if (this.state.show === 'updateBlog') {
            return <BlogCreate doWhat={this.state.wikiPage}/>
        }
    }
}
