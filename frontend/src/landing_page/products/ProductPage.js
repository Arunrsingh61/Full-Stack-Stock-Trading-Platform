import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import RightSection1 from './RightSection1'
import Universe from './Universe'

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection imageURL="media/images/kite.png" productName='Kite' productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='https://play.google.com/store/search?q=Zerodha&c=apps&hl=en_IN' appStore='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802' />


            <RightSection imageURL="media/images/products-console.png" productName='Console' productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' learnMore={["","Console"]}/>


            <LeftSection imageURL="media/images/coin.png" productName='Coin' productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='https://play.google.com/store/search?q=Zerodha&c=apps&hl=en_IN' appStore='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802' />


            <RightSection1 imageURL="media/images/kiteconnect.png" productName='Kite Connect API' productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' learnMore={["","Kite Connect"]}/>


            <LeftSection imageURL="media/images/varsity.png" productName='Varsity mobile' productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='' learnMore='' googlePlay='https://play.google.com/store/search?q=Zerodha&c=apps&hl=en_IN' appStore='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802' />

            <Universe/>

        </>
    );
}

export default ProductPage;