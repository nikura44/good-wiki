import React from 'react'
import { Carousel } from 'antd'

const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
};

export default class CarouselDisplay extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>Hello world</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>中国银行软件中心</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>文件传输小组</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>数据湖</h3>
                </div>
            </Carousel>
        );
    }
}