import React from 'react';
import './style.scss';
import clean from '../../img/clean.png';
import secure from '../../img/secure.png';
import retina from '../../img/retina.png';


export default function LoveApp() {
    return(
        <section className='loveApp'>
            <h2 className='loveApp__title'>Why <span className='text-bold'>small business owners<br />love</span> AppCo?</h2>
            <p className='loveApp__text'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            <div className='loveApp__wrapper'>
                <div className='loveApp__item'>
                    <img className='loveApp__img' src={clean} alt={clean}></img>
                    <p className='loveApp_name loveApp__left'>Clean Design</p>
                    <p className='loveApp_font'>Increase sales by showing true dynamics of your website.</p>
                </div>
                <div className='loveApp__item'>
                    <img className='loveApp__img' src={secure} alt={secure}></img>
                    <p className='loveApp_name'>Secure Data</p>
                    <p className='loveApp_font'>Build your online store’s trust using Social Proof & Urgency.</p>
                </div>
                <div className='loveApp__item'>
                    <img className='loveApp__img' src={retina} alt={retina}></img>
                    <p className='loveApp_name'>Retina Ready</p>
                    <p className='loveApp_font'>Realize importance of social proof in customer’s purchase decision.</p>
                </div>
            </div>
        </section>    
    )
}