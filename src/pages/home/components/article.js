import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArticleWrapper,ArticleItem,ArticleLeft,ArticleRight,GitMore } from '../style'
import { getHomeListByPage } from '@/store/actionCreator'
import { fromJS } from 'immutable'
const picImg= require('@/static/pic1.png')
class Article extends Component {
    render(){
        const { articleList }= this.props
        return (
            <ArticleWrapper>
                {
                    articleList.map((item)=>{
                        return(
                            <ArticleItem key={item.get('id')}>
                                <ArticleLeft>
                                    <h1>{item.get('title')}</h1>
                                    <p className="tip_p">
                                        {item.get('desc')}
                                    </p>
                                </ArticleLeft> 
                                <ArticleRight>
                                    <img className="Article-pic" src={require(`@/static/${item.get('path')}`)} />  
                                </ArticleRight>  
                            </ArticleItem> 
                        )
                    })
                }
                <GitMore
                    onClick={()=>this.props.getHomeListByPage(this.props.page)}
                >加载更多</GitMore>
            </ArticleWrapper>
        )
    }
}
const mapStateToProps= (state)=>{
    return {
        page: state.getIn(['home','page'])
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        getHomeListByPage(page){
            dispatch(getHomeListByPage(page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article)