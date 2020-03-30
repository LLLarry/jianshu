import { CHANGE_ISFOCUSED_VAL,CHANGE_LIST,CHANGE_TotalPage,CHANGE_MOUSEOVER,CHANGE_PAGE,CHANGE_HOME_DATA,CHANGE_ARTICLE_LIST,CHANGE_GOBACK_SHOW } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'
export const changeIsfocusedTrue= ()=>{
    return {
        type: CHANGE_ISFOCUSED_VAL,
        flag: true
    }
}
export const changeIsfocusedFalse= ()=>{
    return {
        type: CHANGE_ISFOCUSED_VAL,
        flag: false
    }
}
export const changeList= (list)=>{
    return {
        type: CHANGE_LIST,
        list
    }
}
export const changeTotalPage= (totalPage)=>{
    return {
        type: CHANGE_TotalPage,
        totalPage
    }
}
export const changeMouseOver= (flag)=>{
    return {
        type: CHANGE_MOUSEOVER,
        mouseOver: flag
    }
}
export const changePage= (page,totalPage)=>{
    page= page+1 > totalPage ? 1 : page+1
    return {
        type: CHANGE_PAGE,
        page
    }
}
export const changeHomeData= (result)=>{
    return {
        type: CHANGE_HOME_DATA,
        toppicList: result.get('toppicList'),
        articleList: result.get('articleList'),
        bannerList: result.get('bannerList'),
    }
}
export const changeArticleList= (list)=>{
    return {
        type: CHANGE_ARTICLE_LIST,
        list
    }
}
export const changeGoBackShow= (flag)=>{
    return {
        type: CHANGE_GOBACK_SHOW,
        flag
    }
}

export const getList= ()=>{
    return (dispatch)=>{
        axios.get('/api/header/hotsearch.json').then(res=>{
            const data= res.data
            if(data.success){
                const totalPage= Math.ceil(data.list.length / 10)
                dispatch(changeTotalPage(totalPage))
                dispatch(changeList(fromJS(data.list)))
            }
        })
    }
}

export const getHomeList= ()=>{
    return (dispatch)=>{
        axios.get('/api/home/homedata.json').then(res=>{
            const data= res.data
            if(data.success){
                dispatch(changeHomeData(fromJS(data)))
            }
        })
    }
}

export const getHomeListByPage= (page)=>{
    return (dispatch,getState)=>{
        axios.get('/api/home/articleList.json?page'+page).then(res=>{
            const data= res.data
            if(data.success){
                const articleList= getState().getIn(['home','articleList'])
                const lastId= articleList.get(articleList.size-1).get('id') || 0
                const mewList= data.list.map((item,i)=>{
                    item.id= lastId+i+1
                    return item
                })
                dispatch(changeArticleList(fromJS(mewList)))
            }
        })
    }
}