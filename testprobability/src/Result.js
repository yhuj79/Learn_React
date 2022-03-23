import React from 'react';
import './Result.css';
import bottomMark from './image/22TOTYbottom.png'
import TOTY22mark from './image/22TOTYmark.png';

function Result({ overall, position, nation, profile, reinforce, name, pay }) {
    return (
        <div className="result_div">
            <div className="result_top">
                <p className="result_top_overall">{overall}</p>
                <p className="result_top_position">{position}</p>
                <img className="result_top_nation" alt="" src={nation} />
            </div>
            <img className="result_profileimg" alt="" src={profile} />
            <div className="result_top_markdiv">
                <img className="result_top_mark" alt="" src={TOTY22mark} />
            </div>
            {reinforce === 1 ? (
                <div className="result_reinforcediv" style={{ background: '#4a4e55' }}>{reinforce}</div>
            ) : (reinforce === 5
                ? <div className="result_reinforcediv" style={{ background: '#C2C5CA' }}>{reinforce}</div>
                : <div className="result_reinforcediv" style={{ background: '#C37653' }}>{reinforce}</div>
            )}
            <div className="result_bottom">
                <div className="result_bottom_name">
                    <img className="result_bottom_mark" alt="" src={bottomMark} />
                    <p>&ensp;{name}</p>
                </div>
                <div className="result_pay_hexagon">
                    <p className="result_pay">{pay}</p>
                </div>
            </div>
        </div>
    );
}

export default Result;