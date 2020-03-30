import styled from 'styled-components'

export const HomeWrapper= styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft= styled.div`
    width: 625px;
    padding: 30px 0 0 15px;
    float: left;
`
export const HomeRight= styled.div`
    width: 280px;
    margin-left: 40px;
    float: right;
    padding-top: 30px;
`
// Topic style
export const TopicWrapper= styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
`
export const TopicItem= styled.div`
    // font-size:0;
    line-height: 32px;
    height: 32px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    float: left;
    padding-right: 10px;
    font-size: 14px;
    color: #333;
    margin-left: 18px;
    margin-bottom: 10px;
    .topic-pic {
        width: 32px;
        height: 32px;
        // display: block;
        float: left;
        // vertical-align: middle;
        margin-right: 10px;
    }
`
// article  css样式
export const ArticleWrapper= styled.div`

`
export const ArticleItem= styled.div`
    overflow: hidden;
    width: 100%;
    padding: 15px 0 20px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 15px;
    img {
        width: 150px;
        height: 100px;
        float: right;
        border-radius: 3px;
    }
`
export const ArticleLeft= styled.div`
    width: 458px;
    float: left;
    h1 {
        color: #333;
        line-height: 27px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
    .tip_p {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const ArticleRight= styled.div`
    padding-top: 30px;
`
// banner css样式
export const BannerWrapper= styled.div`

`
export const BannerItem= styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${props=>require('@/static/'+props.imgSrc)});
    background-size: contain;
`
export const GitMore= styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    border-radius: 40px;
    text-align: center;
    color: #fff;
    background: #a5a5a5;
    cursor: pointer;
`
// 回到顶部样式
export const GoBackTop= styled.div`
    position: fixed;
    right: 60px;
    bottom: 100px;
    color: #666;
    padding: 15px 20px;
    border:1px solid #ddd;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
`