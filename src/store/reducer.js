
import { combineReducers } from 'redux-immutable' //这里的插件combineReducers和redux中的combineReducers是一样的
// import { combineReducers } from 'redux'
import headerReducer from '@c/Header/store/reducer'
import HomeReducer from '@/pages/home/store/reducer'
const reducer= combineReducers({ //这里面的最外层的state变成immutable对象
    header: headerReducer,
    home: HomeReducer
})
export default reducer