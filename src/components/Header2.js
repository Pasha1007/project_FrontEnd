import React, { Component } from 'react';
import tax_rate from './Header2_comps/tax.jpg'
import arrow from './Header2_comps/arrow.jpg'
import hand from './Header2_comps/hand_coin.jpg'
import dot from './Header2_comps/dotted.jpg'
import card from './Header2_comps/card.jpg'
import cashback from './Header2_comps/cashback.jpg'
import fishka from './Header2_comps/fishka.jpg'
import fishkaman from './Header2_comps/fishka-man.jpg'




class Header2 extends Component {
    render() {
        return (
            <div className='header2'>
            <div className='header2_top'>
                <div className='ellipse1'>
                    <div className='ellipse_txt1'>Забуваєш заплатити податки вчасно?</div>
                </div>
                <img className='tax_img' src={tax_rate}/>
                <div className='ellipse2'>
                <div className='ellipse_txt2'> Не встигаєш за податковими новинами, особливо під час війни?</div>
                </div>
                <img className='arrow_img' src={arrow}/>

                <img className='hand_img' src={hand}/>
                </div>
                <div className='header2_bottom'>
                <img className='card_img' src={card}/>
                <img className='dotted_img' src={dot}/>
                <div className='info_block_cashback'>
                <h1 className='title'>FOP HELPER</h1>
                <div className='title_txt1'> — це календар-щоденник, який зробить життя ФОПів початківців простішим і продуктивнішим</div>
                {/* <img className='cashback_img' src={cashback}/> */}
                <div className='title_txt2'>Простір для відстежування вчасної оплати податків, останніх новин та знаходження відповідей на важливі питання про оподаткування.</div>
                </div>
                <img className='fishka_img' src={fishka}/>
                <img className='fishkaman_img' src={fishkaman}/>

                </div>
            </div>
        );
    }
}

export default Header2;