import React from 'react'
import { Result, Button } from 'antd';

export default class SuccessPage extends React.Component {

    handleClick = () => {
        this.props.gowhat('writer');
    }

    render(){
        return(<Result
            status="success"
            title="您已经成功提交了您的博客!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1 minutes, please wait."
            extra={[
              <Button type="Wikipage" key="console" onClick={this.handleClick}>
                Go Wiki
              </Button>,
              <Button key="blogpage" onClick={this.handleClick}>Write a blog Again</Button>,
            ]}
          />)
    }

}
