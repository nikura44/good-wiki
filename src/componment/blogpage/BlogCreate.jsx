import React from 'react';
import MarkdownEditor from './MarkdownEdit';
import { Input ,Button,Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import api from './../../api/index';
import SuccessPage from './resultpage/SuccessPage';

import './blogpage.css'

const { TextArea } = Input;

export default class BlogCreate extends React.Component {

    componentDidMount() {
        if (this.props.doWhat != null) {
            this.setState({
                description : this.props.doWhat.description,
                username : this.props.doWhat.username,
                value : this.props.doWhat.title,
                info : this.props.doWhat.pageInfo
            })

        }
    }

    state = {
        value: '',
        info:'',
        status:'writer',
        description:'',
        username:'',
      };

      onChange = ({ target: { value } }) => {
        this.setState({ value });
      };
      onChangeDes = e => {
        this.setState({ description : e.target.value });
      };
      onChangeUsr = e => {
        this.setState({ username : e.target.value });
      }

      submitHtml(){

              let bloginfo = {
                  title : this.state.value,
                  pageInfo : this.state.info,
                  username : this.state.username,
                  description : this.state.description,
              }
              console.log(bloginfo)
          if(this.props.doWhat === ""){
              api.insertBlog(bloginfo).then(res => {
                  console.log(res)
                  this.setState({status : 'success'})
                  this.setState({value:''})
                  this.setState({description:''})
              })
          } else {
              api.updateBlog(bloginfo).then(res => {
                  console.log("idI : === " + bloginfo)
                  this.setState({status : 'success'})
                  this.setState({value:''})
                  this.setState({description:''})
              })
          }



      }

      gethtmldata = htmldata => {
        this.setState({info : htmldata});
    }

    handleSubmitAction = select => {
        this.setState({status : select});
    }

    render(){
        const { value,status,description,username } = this.state;
        if(status === 'success') {
            return <SuccessPage gowhat={this.handleSubmitAction}/>
        }
        return(<div>
            <div className="titleForm">
                <TextArea placeholder="在此处输入你的标题" autoSize
                value={value}
                onChange={this.onChange}
                className="title"
                />
                <Button type="primary" shape="round" size="middle" className="submit"
                onClick={() => this.submitHtml()}>
                Submit
                </Button>
            </div>
            <Divider>Theme</Divider>
            <div className="titleForm">
                <TextArea placeholder="在此处描述一下你的博客主题吧！" autoSize
                value={description}
                onChange={this.onChangeDes}
                className="title"
                />
                <Divider type="vertical"/>
                <Input placeholder="留下作者信息吧" prefix={<UserOutlined />} value={username}
                onChange={this.onChangeUsr}/>
            </div>
            <Divider>Text</Divider>
            <MarkdownEditor htmltrans={this.gethtmldata.bind(this)} htmlContent={this.props.doWhat}/>
        </div>)
    }

}
