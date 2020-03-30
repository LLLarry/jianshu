import React, { Component } from 'react'
import { TopicWrapper,TopicItem } from '../style'
// import picImg from '@/static/pic1.png'
// const picImg= require('@/static/pic1.png')
class Topic extends Component {
    render(){
        const { toppicList }= this.props
        return (
            <TopicWrapper>
                {
                    toppicList.map(item=>{
                        return(
                            <TopicItem 
                                key= {item.get('id')}
                            >
                                <img className="topic-pic" src={require(`@/static/${item.get('path')}`)} />
                                { item.get('title') }
                            </TopicItem>
                        )
                    })
                }
               
            </TopicWrapper>
        )
    }
}

export default Topic