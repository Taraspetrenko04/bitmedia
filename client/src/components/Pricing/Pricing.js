import React from 'react';
import './style.scss';
import pricing from '../../img/pricing.png';
import line from '../../img/line.png';
import basic from '../../img/basic.png';
import standart from '../../img/standart.png';
import unlimited from '../../img/unlimited.png';


export default function Pricing() {
    return(
        <section className='pricing'>
            <img className='pricing__img' src={pricing} alt={pricing}></img>
            <h2 className='pricing__title'><span className='text-bold'>Afforadble Pricing and Packages</span><br/> choose your best one</h2>
            <p className='pricing__description'>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
            <div className='pricing__container'>
                <div className='pricing__item'>
                    <p className='pricing__name'>Basic</p>
                    <img className='pricing__icon' src={basic} alt={basic}></img>
                    <p className='pricing__price'>$29</p>
                    <img className='pricing__line' src={line} alt={line}></img>
                    <p className='pricing__text'>Push Notifications<br/> Data Transfer<br/> SQL Database<br/> Search & SEO Analytics<br/> 24/7 Phone Support<br/> 2 months technical support<br/> 2+ profitable keyword</p>
                    <button className='pricing__button'>Purchase now</button>
                </div>
                <div className='pricing__item'>
                    <p className='pricing__name'>Standard</p>
                    <img className='pricing__icon' src={standart} alt={standart}></img>
                    <p className='pricing__price'>$149</p>
                    <img className='pricing__line' src={line} alt={line}></img>
                    <p className='pricing__text'>Push Notifications<br/> Data Transfer<br/> SQL Database<br/> Search & SEO Analytics<br/> 24/7 Phone Support<br/> 2 months technical support<br/> 2+ profitable keyword</p>
                    <button className='pricing__button'>Purchase now</button>
                </div>
                <div className='pricing__item'>
                    <p className='pricing__name'>Unlimited</p>
                    <img className='pricing__icon' src={unlimited} alt={unlimited}></img>
                    <p className='pricing__price'>$39</p>
                    <img className='pricing__line' src={line} alt={line}></img>
                    <p className='pricing__text'>Push Notifications<br/> Data Transfer<br/> SQL Database<br/> Search & SEO Analytics<br/> 24/7 Phone Support<br/> 2 months technical support<br/> 2+ profitable keyword</p>
                    <button className='pricing__button'>Purchase now</button>
                </div>
            </div>
            <p className='pricing__contactUs'>If you need custom services or Need more?<span className='text-bold color-blue'>Contact us</span></p>
        </section>
    )
}