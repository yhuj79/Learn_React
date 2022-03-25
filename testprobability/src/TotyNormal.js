import React from 'react';
import { useState } from 'react';
import Result from './Result';
import './Pack.css';
import TotyPackNormal from './image/TotyPackNormal.png';

import Lewandowski from './image/profile/Lewandowski.png';
import Messi from './image/profile/Messi.png';
import Cancelo from './image/profile/Cancelo.png';
import DeBruyne from './image/profile/DeBruyne.png';
import Dias from './image/profile/Dias.png';
import Donnarumma from './image/profile/Donnarumma.png';
import Hakimi from './image/profile/Hakimi.png';
import Jorginho from './image/profile/Jorginho.png';
import Kante from './image/profile/Kante.png';
import Marquinhos from './image/profile/Marquinhos.png';
import Mbappe from './image/profile/Mbappe.png';
import Son from './image/profile/Son.png';

import Argentina from './image/nation/Argentina.png';
import Poland from './image/nation/Poland.png';
import Belgium from './image/nation/Belgium.png';
import Brazil from './image/nation/Brazil.png';
import France from './image/nation/France.png';
import Italy from './image/nation/Italy.png';
import Morocco from './image/nation/Morocco.png';
import Portugal from './image/nation/Portugal.png';
import Korea from './image/nation/Korea.png';

function TotyNormal() {
    const [num, setNum] = useState(0);

    const handleClick = () => {
        setNum(Math.random() * 100);
    }

    return (
        <div className="pack_div">
            <h2><br />22TOTY Top Price All<br /><br /></h2>
            <br />
            <p style={{ color: 'grey' }}>{num}</p>
            {(() => {
                switch (true) {
                    case (num > 98.3329166585):
                        // 1.667 보다 0.0000000088 높음 => 1.6670833414    
                        return <Result profile={Son} reinforce={1} overall={108} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={61200000000} />
                    case (num > 96.6658333259 && num <= 98.3329166585):
                        return <Result profile={Lewandowski} reinforce={1} overall={110} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={50300000000} />
                    case (num > 94.9987499933 && num <= 96.6658333259):
                        return <Result profile={Mbappe} reinforce={1} overall={110} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={27200000000} />
                    case (num > 89.9986666607 && num <= 94.9987499933):
                        return <Result profile={Messi} reinforce={1} overall={110} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={11300000000} />
                    case (num > 84.9985833281 && num <= 89.9986666607):
                        return <Result profile={DeBruyne} reinforce={1} overall={109} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={8970000000} />
                    case (num > 79.9984999955 && num <= 84.9985833281):
                        return <Result profile={Dias} reinforce={1} overall={110} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={8050000000} />
                    case (num > 66.6654166629 && num <= 79.9984999955):
                        return <Result profile={Kante} reinforce={1} overall={109} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={4940000000} />
                    case (num > 53.3323333303 && num <= 66.6654166629):
                        return <Result profile={Donnarumma} reinforce={1} overall={109} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={4830000000} />
                    case (num > 39.9992499977 && num <= 53.3323333303):
                        return <Result profile={Jorginho} reinforce={1} overall={108} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={3590000000} />
                    case (num > 26.6661666651 && num <= 39.9992499977):
                        return <Result profile={Marquinhos} reinforce={1} overall={108} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={3520000000} />
                    case (num > 13.3330833325 && num <= 26.6661666651):
                        return <Result profile={Cancelo} reinforce={1} overall={108} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={3360000000} />
                    case (num > 0 && num <= 13.3330833325):
                        return <Result profile={Hakimi} reinforce={1} overall={107} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={2420000000} />
                    default:
                        return <div className="pack_before"><img alt="" src={TotyPackNormal} /></div>
                }
            })()}
            <br />
            <button className="pack_button" onClick={handleClick}>OPEN</button>
        </div>
    );
}
export default TotyNormal;