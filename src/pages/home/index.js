import React, { Component } from 'react'
import { HomeWrapper,HomeLeft,HomeRight,GoBackTop } from './style'
import { connect } from 'react-redux'
import { getHomeList,changeGoBackShow } from '@/store/actionCreator'
import Topic from './components/topic'
import Article from './components/article'
import Banner from './components/banner'
class Home extends Component {
    componentDidMount(){
        this.props.getHomeList()
        this.initListenerWindow()
    }
    initListenerWindow(){
        window.addEventListener('scroll',this.props.handleScroll,false)
    }
    handleGoBackTop(){
        window.scroll(0,0)
        // document.documentElement.scroll(0,0)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.handleScroll,false)
    }
    render(){
        const { toppicList,articleList,bannerList }= this.props
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Topic className="topic" toppicList={toppicList} />
                    <Article articleList={articleList} />
                </HomeLeft>
                <HomeRight>
                    <Banner bannerList={bannerList} />
                </HomeRight>
                { 
                    this.props.isShow ?  <GoBackTop onClick={this.handleGoBackTop}>回到顶部</GoBackTop> : null
                }
            </HomeWrapper>
        )
    }
}

const mapStateToProps= (state)=>{
    return {
        toppicList: state.getIn(['home','toppicList']),
        articleList:state.getIn(['home','articleList']),
        bannerList: state.getIn(['home','bannerList']),
        isShow: state.getIn(['home','isShow'])
    }
}
const mapDispatchProps= (dispatch)=>{
    return {
        getHomeList(){
            dispatch(getHomeList())
        },
        handleScroll(){
            const scrollTop= document.documentElement.scrollTop
            if(scrollTop > 200){
                dispatch(changeGoBackShow(true))
            }else{
                dispatch(changeGoBackShow(false))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Home)