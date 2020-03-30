import { fromJS } from 'immutable'
import { CHANGE_ISFOCUSED_VAL,CHANGE_LIST,CHANGE_TotalPage,CHANGE_MOUSEOVER,CHANGE_PAGE } from '@/store/actionTypes'
/*
*Immutable由何而生?
s在创建变量、赋值后是可变的。除了基本类型，其他的引用类型，通过变量地址来共享。
改变了obj1.a的值，同时也会改变obj.a的值。其实改变的是同一个对象引用。这样共享地址来共享值的好处是节省内存，坏处是稍微不注意就会导致改A坏B的棘手问题。
一般的解法就是使用深拷贝而非浅拷贝，生成一份基本类型值完全相同但是没有共享地址的数据，除了浪费内存之外，深拷贝复杂引用类型时需要深度遍历，这样的做法在React这样频繁更新数据和对数据更新性能有要求的场景，深拷贝是一个不优雅不推荐，say no的选择。
那怎么做呢，这个时候Immutable就可以闪亮登场解决这个问题，为什么呢？

使用方法 
1、import { fromJS } from 'immutable'
将需要直接修改的对象传进fromJS函数中，返回一个新对象 const newObj= fromJS(obj)
修改对象中的值用 newObj.set(key,val)
获取对象中的值 newObj.get(key)

这里用使用immutable我们的headerReducer就是immutable对象，但是最外层的state是个js对象，不是immutable对象
这样不符合常规，所以我们需要也将最最层的state也成为immutable对象，我们可以再下载一个插件
import { combineReducers } from 'redux-immutable' 这里面也有过一个combineReducers结合reducer的插件
*/ 

const defaultState= fromJS({
    isfocused: false,//是否输入框获取焦点
    list: [], //热门搜索
    page: 1, //页码
    totalPage: 1, //总页码
    mouseOver: false //鼠标是否进入热门搜索
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_ISFOCUSED_VAL:
            // return { ...state,isfocused: action.flag };
            return state.set('isfocused',action.flag)
        case CHANGE_LIST:
            return state.set('list',action.list);
        case CHANGE_TotalPage:
            return state.set('totalPage',action.totalPage);
        case CHANGE_MOUSEOVER:
            return state.set('mouseOver',action.mouseOver);
        case CHANGE_PAGE: 
            return state.set('page',action.page)
        default : 
            return state;
    }
}
