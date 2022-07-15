import React from "react";
import "../Ads/AdsStyle.scss"
export function Ads() {


    return <section>
        <div id="first">
            <div className="image">
                <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" />
            </div>
            <div className="article">
                <h1 className="title">Welcome to Prime Video</h1>
                <p className="subTitle">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                <button className="ad_btn">Sign to join Prime</button>
            </div>
        </div>


        <div id="second">
            <div className="image">
                <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/Prime-Video---1440-x-675-New._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" />
            </div>
            <div className="article">
                <h1 className="title">Movie rentals on Prime Video</h1>
                <p className="subTitle">Early Access to new movies, before digital subscription</p>
                <button className="ad_btn">Rent now</button>

            </div>

        </div>


        <div id="kids">
                <div className="image">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SX1440_CR0,0,865,675_QL80_AC_FP_.jpg"/>   
                </div>
                <div className="article">
                <h1 className="title">Even better with Fire TV Stick</h1>
                <p className="subTitle">The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
                <button className="ad_btn">Get started</button>

                </div>              
                </div> 


        <div className="ad">
            <div className="image">
                <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" />
            </div>
            <div className="article">
                <h1 className="title">Family Friendly</h1>
                <p className="subTitle">With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                <button className="ad_btn">Get started</button>

            </div>

        </div>
    </section>
}