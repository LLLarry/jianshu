import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionCreator from '@/store/actionCreator'
import {
    HeaderWrapper,
    Logo,
    HeaderCon,
    Nav,
    SearchSwiper,
    SearchHistory,
    SearchTitle,
    SearchChange,
    HistoryWraper,
    SearchHisCom,
    SearchItem,
    NavItem,
    InputItem,
    ButtonLeft,
    ButtonRight
} from './style'

class Header extends Component {
    render() {
        const { page, isfocused, handleFouce, handleBlur, mouseOver, handleMouseOver, handleMouseLeave, changePage } = this.props
        const arrList = []
        const list = this.props.list.toJS() //将immutable对象转化为js对象
        if (list.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                arrList.push(list[i])
            }
        }
        return (
            <HeaderWrapper className="header">
                <HeaderCon>
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="right gray">登录</NavItem>
                        <NavItem className="right gray">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchSwiper>
                            <CSSTransition
                                in={isfocused}
                                timeout={200}
                                classNames="header"
                            >
                                <InputItem
                                    placeholder="搜索"
                                    onFocus={()=>handleFouce(this.props.list)}
                                    onBlur={handleBlur}
                                />
                            </CSSTransition>
                            <CSSTransition
                                in={isfocused}
                                timeout={200}
                                classNames="header"
                            >
                                <i className="iconfont zoom">&#xe62b;</i>
                            </CSSTransition>
                            {
                                (isfocused || mouseOver) ?
                                    (
                                        <HistoryWraper
                                            onMouseOver={handleMouseOver}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <SearchHistory
                                                className="search_info"
                                                ref="search_info"
                                            >
                                                <SearchTitle>
                                                    热门搜索
                                            <SearchChange
                                                 onClick={changePage.bind(this)}
                                            >
                                                <i
                                                    className="iconfont loading"
                                                    ref={(iconLoad) => { this.iconLoad = iconLoad }}
                                                >
                                                    &#xe851;
                                                </i>
                                                换一批
                                            </SearchChange>
                                                </SearchTitle>
                                                <SearchHisCom>
                                                    {
                                                        arrList.map((item, i) => (
                                                            <SearchItem key={i}>{item}</SearchItem>
                                                        ))
                                                    }

                                                </SearchHisCom>
                                            </SearchHistory>
                                        </HistoryWraper>
                                    ) : null
                            }

                        </SearchSwiper>
                    </Nav>
                    <ButtonRight>
                        <i className="iconfont">&#xe602;</i>
                        写文章
                    </ButtonRight>
                    <ButtonLeft>注册</ButtonLeft>
                </HeaderCon>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isfocused: state.getIn(['header', 'isfocused']),
        list: state.getIn(['header', 'list']),
        mouseOver: state.getIn(['header', 'mouseOver']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        // isfocused : state.get('header').get('isfocused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFouce(list) {
            // 当list的长度小于等于0的时候才去发送请求
            (list.size === 0) && dispatch(actionCreator.getList())
            dispatch(actionCreator.changeIsfocusedTrue())
        },
        handleBlur() {
            dispatch(actionCreator.changeIsfocusedFalse())
        },
        handleMouseOver() {
            dispatch(actionCreator.changeMouseOver(true))
        },
        handleMouseLeave() {
            dispatch(actionCreator.changeMouseOver(false))
        },
        changePage() {
            let initRotatestr = this.iconLoad.style.transform.match(/\d{1,}/g)
            let initRotate = 0
            if (initRotatestr) {
                initRotate = parseInt(initRotatestr[0])
            }
            // 元素只有是块级元素或者行内块元素，才有旋转特性
            this.iconLoad.style.transform = `rotate(${initRotate + 360}deg)`
            dispatch(actionCreator.changePage(this.props.page, this.props.totalPage))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)