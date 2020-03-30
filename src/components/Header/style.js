import styled from 'styled-components'
import logo from '@/static/logo.png'
export const HeaderWrapper= styled.header`
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #e7e7e7;
`
export const HeaderCon= styled.div`
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    position: relative;
`
export const Logo= styled.a`
    position: absolute;
    left:0;
    top: 0;
    height: 56px;
    width: 100px;
    margin: 0 30px;
    background-image: url(${logo});
    background-size: contain;
`
export const Nav= styled.div`
    width: 960px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -480px;
`
export const NavItem= styled.a`
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    font-size: 17px;
    color: #333333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
    &.gray {
        color: #969696;
    }
`
export const SearchSwiper= styled.div`
    display: inline-block;
    position: relative;
    margin-top: 9px;
    .zoom {
        width: 28px;
        line-height: 28px;
        border-radius: 50%;
        position:absolute;
        right: 5px;
        top: 4px;
        color: rgba(150,150,150);
        text-align:center;
        font-size: 18px;
        &.header-enter {
            transition: all 0.2s; 
        }
        &.header-enter-active {
            background: #ccc;
            color: #fff;
        }
        &.header-enter-done {
            background: #ccc;
            color: #fff;
        }
        &.header-exit {
            transition: all 0.2s; 
        }
        &.header-exit-active {
            background: transparent;
            color: rgba(150,150,150);
        }
        &.header-exit-done {
            background: transparent;
            color: rgba(150,150,150);
        }
    }
`
export const HistoryWraper= styled.div`
    position: absolute;
    top: 47px;
    left: 0;
    width: 240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    overflow: hidden;
    background: #fff;
`
export const SearchHistory= styled.div`
    padding: 10px 15px;
`
export const SearchTitle= styled.div`
    font-size: 14px;
    color: #666;
    padding: 5px 0;
`
export const SearchChange= styled.div`
    font-size: 13px;
    color: #777;
    float: right;
    cursor: pointer;
    user-select: none;
    .loading {
        display: inline-block;
        margin-right: 3px;
        font-size: 12px;
        transform-origin: center center;
        transition: all 0.2s;
    }
`
export const SearchHisCom= styled.div`
    overflow: hidden;
    padding-top: 15px;
`
export const SearchItem= styled.a`
    padding: 5px 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    lint-height: 28px;
    color: #929292;
    float: left;
    margin: 0 10px 10px 0;
    font-size: 12px;
    cursor: pointer;
`
export const InputItem= styled.input`
    width: 160px;
    height: 36px;
    padding: 8px 36px 8px 16px;
    box-sizing: border-box;
    background: #f2f2f2;
    border:none;
    outline: none;
    border-radius: 18px;
    
    &::placeholder {
        color: #999;
        font-size: 14px;
    }
    &.header-enter {
        transition: all 0.2s; 
    }
    &.header-enter-active {
        width: 240px;
    }
    &.header-enter-done {
        width: 240px;
    }
    &.header-exit {
        transition: all 0.2s; 
    }
    &.header-exit-active {
        width: 160px;
    }
    &.header-exit-done {
        width: 160px;
    }
`

export const ButtonLeft= styled.a`
    width: 80px;
    height: 38px;
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
    border-radius: 19px;
    font-size:15px;
    line-height: 26px;
    float: right;
    text-align: center;
    border-radius: 19px;
    margin: 9px 5px 0 15px;
    padding: 6px 12px;
    box-sizing: border-box;
`
export const ButtonRight= styled.a`
    width: 100px;
    height: 38px;
    border: 1px solid #ea6f5a;
    background: #ea6f5a;
    color: #fff;
    border: 19px;
    font-size:15px;
    line-height: 26px;
    float: right;
    text-align: center;
    border-radius: 19px;
    margin: 8px 12px 0;
    padding: 6px 12px;
    box-sizing: border-box;
    .iconfont {
        margin-right:5px;
    }
`