import React from 'react';
import ShowContent from './ShowContent';
import BlogCreate from './../../blogpage/BlogCreate'
import ListShow from './../../wikipage/ListShow'

export default class ContentAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        if(this.props.select === 'wikipage') {
            return <ListShow />
        }
        if(this.props.select === 'blogpage') {
            return <BlogCreate />;
        }
        return <ShowContent />;
    }
}