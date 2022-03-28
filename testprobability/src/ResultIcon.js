import React from 'react';
import './Result.css';
import TotyMarkNormal from './image/IconMarkNormal.png';
import TotyMarkBottom from './image/IconMarkBottom.png';

function addComma(prNum) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return prNum.toString().replace(regexp, ',');
}

function Result({ overall, position, nation, profile, reinforce, name, pay, price }) {
    return (
        <div>
            <div className="result_icon_div">
                <div className="result_top">
                    <p className="result_top_overall">{overall}</p>
                    <p className="result_top_position">{position}</p>
                    <img className="result_top_nation" alt="" src={nation} />
                </div>
                <img className="result_profileimg" alt="" src={profile} />
                <div className="result_top_markdiv">
                    <img className="result_top_mark" alt="" src={TotyMarkNormal} />
                </div>
                {reinforce === 1 ? (
                    <div className="result_reinforcediv" style={{ background: '#4a4e55' }}>{reinforce}</div>
                ) : (reinforce === 5
                    ? <div className="result_reinforcediv" style={{ background: '#C2C5CA' }}>{reinforce}</div>
                    : <div className="result_reinforcediv" style={{ background: '#C37653' }}>{reinforce}</div>
                )}
                <div className="result_bottom">
                    <div className="result_bottom_name">
                        <img className="result_bottom_mark" alt="" src={TotyMarkBottom} />
                        <p>&ensp;{name}</p>
                    </div>
                    <div className="result_pay_hexagon">
                        <p className="result_pay">{pay}</p>
                    </div>
                </div>
            </div>
            <p className="result_price">{addComma(price)} BP</p>
        </div>
    );
}

export default Result;