import React from 'react';
import { useState } from 'react';
import Result from './ResultToty';
import './Pack.css';
import TotyPackReinforce from './image/TotyPackReinforce.png';

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

function TotyReinforce() {
    const [num, setNum] = useState(0);

    const handleClick = () => {
        setNum(Math.random() * 100);
    }

    return (
        <div className="pack_div">
            <p className="pack_title">22TOTY ALL 강화 선수팩 (1강~5강)</p>
            {/* <p style={{ color: 'grey' }}>{num}</p> */}
            {(() => {
                switch (true) {
                    case (num > 99.9858576658):
                        // 0.0141422700 보다 0.0000000642 높음 => 0.0141423342    
                        return <Result profile={Lewandowski} reinforce={5} overall={116} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={715_000_000_000} />
                    case (num > 99.9717153957 && num <= 99.9858576658):
                        return <Result profile={Mbappe} reinforce={5} overall={116} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={470_000_000_000} />
                    case (num > 99.9575731256 && num <= 99.9717153957):
                        return <Result profile={Son} reinforce={5} overall={114} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={362_000_000_000} />
                    case (num > 99.9434308555 && num <= 99.9575731256):
                        return <Result profile={Messi} reinforce={5} overall={116} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={307_000_000_000} />
                    case (num > 99.9292885854 && num <= 99.9434308555):
                        return <Result profile={DeBruyne} reinforce={5} overall={115} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={280_000_000_000} />
                    case (num > 99.9151463153 && num <= 99.9292885854):
                        return <Result profile={Dias} reinforce={5} overall={116} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={167_000_000_000} />
                    case (num > 99.8868617752 && num <= 99.9151463153):
                        return <Result profile={Lewandowski} reinforce={4} overall={114} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={192_000_000_000} />
                    case (num > 99.8585772351 && num <= 99.8868617752):
                        return <Result profile={Mbappe} reinforce={4} overall={114} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={124_000_000_000} />
                    case (num > 99.8302926950 && num <= 99.8585772351):
                        return <Result profile={Son} reinforce={4} overall={112} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={138_000_000_000} />
                    case (num > 99.8161504249 && num <= 99.8302926950):
                        return <Result profile={Kante} reinforce={5} overall={115} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={92_900_000_000} />
                    case (num > 99.7737236148 && num <= 99.8161504249):
                        return <Result profile={Messi} reinforce={4} overall={114} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={85_200_000_000} />
                    case (num > 99.7595813447 && num <= 99.7737236148):
                        return <Result profile={Marquinhos} reinforce={5} overall={114} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={76_400_000_000} />
                    case (num > 99.7171545346 && num <= 99.7595813447):
                        return <Result profile={Dias} reinforce={4} overall={114} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={64_100_000_000} />
                    case (num > 99.7030122645 && num <= 99.7171545346):
                        return <Result profile={Hakimi} reinforce={5} overall={113} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={58_500_000_000} />
                    case (num > 99.6605854544 && num <= 99.7030122645):
                        return <Result profile={Lewandowski} reinforce={3} overall={112} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={86_500_000_000} />
                    case (num > 99.6464431843 && num <= 99.6605854544):
                        return <Result profile={Cancelo} reinforce={5} overall={114} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={73_600_000_000} />
                    case (num > 99.5615895542 && num <= 99.6464431843):
                        return <Result profile={Son} reinforce={3} overall={110} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={80_500_000_000} />
                    case (num > 99.4767359241 && num <= 99.5615895542):
                        return <Result profile={DeBruyne} reinforce={4} overall={113} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={71_000_000_000} />
                    case (num > 99.4625936540 && num <= 99.4767359241):
                        return <Result profile={Donnarumma} reinforce={5} overall={115} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={68_900_000_000} />
                    case (num > 99.4484513839 && num <= 99.4625936540):
                        return <Result profile={Jorginho} reinforce={5} overall={114} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={62_200_000_000} />
                    case (num > 99.2646018538 && num <= 99.4484513839):
                        return <Result profile={Son} reinforce={2} overall={109} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={63_500_000_000} />
                    case (num > 99.0807523237 && num <= 99.2646018538):
                        return <Result profile={Son} reinforce={1} overall={108} position={"LM"} nation={Korea} name={"손흥민"} pay={25} price={61_400_000_000} />
                    case (num > 98.9534718836 && num <= 99.0807523237):
                        return <Result profile={Mbappe} reinforce={3} overall={112} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={53_500_000_000} />
                    case (num > 98.7696223535 && num <= 98.9534718836):
                        return <Result profile={Lewandowski} reinforce={2} overall={111} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={51_500_000_000} />
                    case (num > 98.5857728234 && num <= 98.7696223535):
                        return <Result profile={Lewandowski} reinforce={1} overall={110} position={"ST"} nation={Poland} name={"R.레반도프스키"} pay={26} price={47_100_000_000} />
                    case (num > 98.4019232933 && num <= 98.5857728234):
                        return <Result profile={Messi} reinforce={3} overall={112} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={33_700_000_000} />
                    case (num > 98.0907933232 && num <= 98.4019232933):
                        return <Result profile={Donnarumma} reinforce={4} overall={113} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={30_000_000_000} />
                    case (num > 97.7796633531 && num <= 98.0907933232):
                        return <Result profile={Jorginho} reinforce={4} overall={112} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={22_200_000_000} />
                    case (num > 97.5958138230 && num <= 97.7796633531):
                        return <Result profile={Kante} reinforce={4} overall={113} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={41_300_000_000} />
                    case (num > 97.4119642929 && num <= 97.5958138230):
                        return <Result profile={Dias} reinforce={3} overall={112} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={26_700_000_000} />
                    case (num > 97.1008343228 && num <= 97.4119642929):
                        return <Result profile={DeBruyne} reinforce={3} overall={111} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={25_200_000_000} />
                    case (num > 96.9169847927 && num <= 97.1008343228):
                        return <Result profile={Cancelo} reinforce={4} overall={112} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={22_400_000_000} />
                    case (num > 96.7331352626 && num <= 96.9169847927):
                        return <Result profile={Mbappe} reinforce={2} overall={111} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={30_200_000_000} />
                    case (num > 96.2381557725 && num <= 96.7331352626):
                        return <Result profile={Marquinhos} reinforce={4} overall={112} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={21_700_000_000} />
                    case (num > 95.7431762824 && num <= 96.2381557725):
                        return <Result profile={Mbappe} reinforce={1} overall={110} position={"ST"} nation={France} name={"킬리안 음바페"} pay={26} price={27_200_000_000} />
                    case (num > 95.2481967923 && num <= 95.7431762824):
                        return <Result profile={Hakimi} reinforce={4} overall={111} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={13_000_000_000} />
                    case (num > 94.7532173022 && num <= 95.2481967923):
                        return <Result profile={Kante} reinforce={3} overall={111} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={14_300_000_000} />
                    case (num > 94.2582378121 && num <= 94.7532173022):
                        return <Result profile={Messi} reinforce={2} overall={111} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={13_300_000_000} />
                    case (num > 93.7632583220 && num <= 94.2582378121):
                        return <Result profile={Donnarumma} reinforce={3} overall={111} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={11_500_000_000} />
                    case (num > 88.3891952519 && num <= 93.7632583220):
                        return <Result profile={Marquinhos} reinforce={3} overall={110} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={7_040_000_000} />
                    case (num > 83.0151321818 && num <= 88.3891952519):
                        return <Result profile={DeBruyne} reinforce={2} overall={110} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={10_900_000_000} />
                    case (num > 77.6410691117 && num <= 83.0151321818):
                        return <Result profile={Dias} reinforce={2} overall={111} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={10_500_000_000} />
                    case (num > 72.2670060416 && num <= 77.6410691117):
                        return <Result profile={Messi} reinforce={1} overall={110} position={"RW"} nation={Argentina} name={"리오넬 메시"} pay={27} price={11_300_000_000} />
                    case (num > 66.8929429715 && num <= 72.2670060416):
                        return <Result profile={Cancelo} reinforce={3} overall={110} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={6_650_000_000} />
                    case (num > 61.5188799014 && num <= 66.8929429715):
                        return <Result profile={Jorginho} reinforce={3} overall={110} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={6_780_000_000} />
                    case (num > 56.1448168313 && num <= 61.5188799014):
                        return <Result profile={DeBruyne} reinforce={1} overall={109} position={"CM"} nation={Belgium} name={"케빈 더브라위너"} pay={26} price={8_970_000_000} />
                    case (num > 50.7707537612 && num <= 56.1448168313):
                        return <Result profile={Hakimi} reinforce={3} overall={109} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={5_130_000_000} />
                    case (num > 45.3966906911 && num <= 50.7707537612):
                        return <Result profile={Kante} reinforce={2} overall={110} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={6_740_000_000} />
                    case (num > 40.0226276210 && num <= 45.3966906911):
                        return <Result profile={Dias} reinforce={1} overall={110} position={"CB"} nation={Portugal} name={"후벵 디아스"} pay={26} price={7_220_000_000} />
                    case (num > 34.6485645509 && num <= 40.0226276210):
                        return <Result profile={Donnarumma} reinforce={2} overall={110} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={6_230_000_000} />
                    case (num > 29.2745014808 && num <= 34.6485645509):
                        return <Result profile={Marquinhos} reinforce={2} overall={109} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={5_110_000_000} />
                    case (num > 23.9004384107 && num <= 29.2745014808):
                        return <Result profile={Cancelo} reinforce={2} overall={109} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={5_030_000_000} />
                    case (num > 18.5263753406 && num <= 23.9004384107):
                        return <Result profile={Jorginho} reinforce={2} overall={109} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={5_150_000_000} />
                    case (num > 13.1523122705 && num <= 18.5263753406):
                        return <Result profile={Donnarumma} reinforce={1} overall={109} position={"GK"} nation={Italy} name={"잔루이지 돈나룸마"} pay={22} price={4_830_000_000} />
                    case (num > 7.7782492004 && num <= 13.1523122705):
                        return <Result profile={Kante} reinforce={1} overall={109} position={"CDM"} nation={France} name={"은골로 캉테"} pay={24} price={5_150_000_000} />
                    case (num > 6.2225993603 && num <= 7.7782492004):
                        return <Result profile={Hakimi} reinforce={2} overall={108} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={3_650_000_000} />
                    case (num > 4.6669495202 && num <= 6.2225993603):
                        return <Result profile={Marquinhos} reinforce={1} overall={108} position={"CB"} nation={Brazil} name={"마르키뉴스"} pay={25} price={3_430_000_000} />
                    case (num > 3.1112996801 && num <= 4.6669495202):
                        return <Result profile={Cancelo} reinforce={1} overall={108} position={"RB"} nation={Portugal} name={"주앙 칸셀루"} pay={23} price={3_350_000_000} />
                    case (num > 1.5556498400 && num <= 3.1112996801):
                        return <Result profile={Jorginho} reinforce={1} overall={108} position={"CM"} nation={Italy} name={"조르지뉴"} pay={24} price={3_590_000_000} />
                    case (num > 0 && num <= 1.5556498400):
                        return <Result profile={Hakimi} reinforce={1} overall={107} position={"RB"} nation={Morocco} name={"아슈라프 하키미"} pay={23} price={2_420_000_000} />
                    default:
                        return <div className="pack_before"><img alt="" src={TotyPackReinforce} /></div>
                }
            })()}
            <button className="pack_button" onClick={handleClick}>OPEN</button>
        </div>
    );
}
export default TotyReinforce;