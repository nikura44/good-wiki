import React from 'react'
import { Layout } from 'antd'
import TopMenu from './topmenu/TopMenu'
import ContentAction from './content/ContentAction'
import './home.css'

const { Header, Content, Footer } = Layout;


export default class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            page : 'homepage'
        }
    }

    handleMenuAction = select => {
        console.log('ok ' + select);
        this.setState({page : select});
    }

    render() {
        return (<Layout>
            <Header className="header">
                <div className="logo" ></div>
                <TopMenu changeAction={this.handleMenuAction.bind(this)}/>
            </Header>

            <Content className="content">
                {/* <ShowContent /> */}
                {/* <BlogCreate /> */}
                <ContentAction select={this.state.page}/>
            </Content>

            <Footer style={{textAlign:'center'}}>
                welcome to nicolas’s web@2021 created by antd
            </Footer>
        </Layout>)
    }
}