import React from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import NicolasImg from '../../../resource/coco.jpg'
import './contentStyle.css'

const { Meta } = Card;

export default class ContentCard extends React.Component {
    render() {
        return (
            <div className="cardStyle">
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <img
                            alt="example"
                            src={NicolasImg}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={NicolasImg} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <img
                            alt="example"
                            src={NicolasImg}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={NicolasImg} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <img
                            alt="example"
                            src={NicolasImg}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={NicolasImg} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <img
                            alt="example"
                            src={NicolasImg}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={NicolasImg} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card
                    style={{ width: 300, margin: 10 }}
                    cover={
                        <img
                            alt="example"
                            src={NicolasImg}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={NicolasImg} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>);
    }
}