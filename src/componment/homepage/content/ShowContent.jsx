import React from 'react'
import CarouselDisplay from './CarouselDisplay'
import ContentCard from './ContentCard'
import { Divider } from 'antd'

export default class ShowContent extends React.Component {

    render() {
        return (
            <div>
                <CarouselDisplay />
                <Divider>Hello World</Divider>
                <ContentCard />
            </div>
        );
    }

}