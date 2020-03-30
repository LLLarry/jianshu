import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA,CHANGE_ARTICLE_LIST,CHANGE_GOBACK_SHOW } from '@/store/actionTypes'
console.log(CHANGE_HOME_DATA)
const defaultState= fromJS({
    toppicList: [],
    articleList: [],
    bannerList: [],
    page: 1, //当前文章页码
    isShow: false // 返回到顶部按钮是否显示
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_HOME_DATA: 
            return state.set('toppicList',action.toppicList).set('articleList',action.articleList).set('bannerList',action.bannerList);
        case CHANGE_ARTICLE_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list))
        case CHANGE_GOBACK_SHOW :
            return state.set('isShow',action.flag)
        default: return state;
    }
}