import React, { Component } from 'react'
import { BannerWrapper,BannerItem } from '../style'

class Banner extends Component {
    render(){
        const { bannerList }= this.props
        return (
            <BannerWrapper>
                { 
                    bannerList.map((item)=>{
                        return <BannerItem key={item.get('id')} imgSrc={item.get('path')} />
                    })
                }
            </BannerWrapper>
        )
    }
}
export default Banner
