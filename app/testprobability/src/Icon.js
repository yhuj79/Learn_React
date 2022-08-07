import React from 'react';
import { useState } from 'react';
import Result from './ResultIcon';
import './Pack.css';
import IconPack from './image/IconPack.png';

import Ronaldo from './image/profile/Ronaldo.png'; import Cha from './image/profile/Cha.png'; import Beckham from './image/profile/Beckham.png';
import Henry from './image/profile/Henry.png'; import Torres from './image/profile/Torres.png'; import Eto from './image/profile/Eto.png';
import Kaka from './image/profile/Kaka.png'; import VanPersie from './image/profile/VanPersie.png'; import Park from './image/profile/Park.png';
import Drogba from './image/profile/Drogba.png'; import Eusebio from './image/profile/Eusebio.png'; import Maldini from './image/profile/Maldini.png';
import Rijkaard from './image/profile/Rijkaard.png'; import Zidane from './image/profile/Zidane.png'; import Rooney from './image/profile/Rooney.png';
import Ronaldinho from './image/profile/Ronaldinho.png'; import Puskas from './image/profile/Puskas.png'; import Xavi from './image/profile/Xavi.png';
import Ballack from './image/profile/Ballack.png'; import Nesta from './image/profile/Nesta.png'; import Cantona from './image/profile/Cantona.png';
import Vieira from './image/profile/Vieira.png'; import Nedved from './image/profile/Nedved.png'; import Schweinsteiger from './image/profile/Schweinsteiger.png';
import Ferdinand from './image/profile/Ferdinand.png'; import Vidic from './image/profile/Vidic.png'; import Scholes from './image/profile/Scholes.png';
import Pirlo from './image/profile/Pirlo.png'; import Cruyff from './image/profile/Cruyff.png'; import Effenberg from './image/profile/Effenberg.png';
import Sanchez from './image/profile/Sanchez.png'; import Puyol from './image/profile/Puyol.png'; import Essien from './image/profile/Essien.png';
import Cafu from './image/profile/Cafu.png'; import Yashin from './image/profile/Yashin.png'; import Casillas from './image/profile/Casillas.png';
import Baggio from './image/profile/Baggio.png'; import Dalglish from './image/profile/Dalglish.png'; import Garrincha from './image/profile/Garrincha.png';
import Crespo from './image/profile/Crespo.png'; import Hagi from './image/profile/Hagi.png'; import Seedorf from './image/profile/Seedorf.png';
import Carlos from './image/profile/Carlos.png'; import RoyKeane from './image/profile/RoyKeane.png'; import Owen from './image/profile/Owen.png';
import Lahm from './image/profile/Lahm.png'; import DelPiero from './image/profile/DelPiero.png'; import Bergkamp from './image/profile/Bergkamp.png';
import Desailly from './image/profile/Desailly.png'; import Cannavaro from './image/profile/Cannavaro.png'; import Raul from './image/profile/Raul.png';
import Alberto from './image/profile/Alberto.png'; import Lampard from './image/profile/Lampard.png'; import Rivaldo from './image/profile/Rivaldo.png';
import Overmars from './image/profile/Overmars.png'; import Blanc from './image/profile/Blanc.png'; import Gerrard from './image/profile/Gerrard.png';
import Petit from './image/profile/Petit.png'; import Kluivert from './image/profile/Kluivert.png'; import Butragueno from './image/profile/Butragueno.png';
import Riquelme from './image/profile/Riquelme.png'; import Inzaghi from './image/profile/Inzaghi.png'; import Hierro from './image/profile/Hierro.png';
import Zanetti from './image/profile/Zanetti.png'; import Makelele from './image/profile/Makelele.png'; import Larsson from './image/profile/Larsson.png';
import Cech from './image/profile/Cech.png'; import Campbell from './image/profile/Campbell.png'; import Stoitchkov from './image/profile/Stoitchkov.png';
import Lineker from './image/profile/Lineker.png'; import Schmeichel from './image/profile/Schmeichel.png'; import Koeman from './image/profile/Koeman.png';
import Rush from './image/profile/Rush.png'; import VanDersar from './image/profile/VanDersar.png'; import Vieri from './image/profile/Vieri.png';
import RuiCosta from './image/profile/RuiCosta.png'; import Trezeguet from './image/profile/Trezeguet.png'; import Deco from './image/profile/Deco.png';
import Zambrotta from './image/profile/Zambrotta.png'; import Gattuso from './image/profile/Gattuso.png'; import Socrates from './image/profile/Socrates.png';
import Guardiola from './image/profile/Guardiola.png'; import Veron from './image/profile/Veron.png'; import MLaudrup from './image/profile/MLaudrup.png';
import Wright from './image/profile/Wright.png'; import Pires from './image/profile/Pires.png'; import Ljungberg from './image/profile/Ljungberg.png';
import Zola from './image/profile/Zola.png'; import Litmanen from './image/profile/Litmanen.png'; import Brehme from './image/profile/Brehme.png';
import Futre from './image/profile/Futre.png'; import Cole from './image/profile/Cole.png'; import Suker from './image/profile/Suker.png';
import Neville from './image/profile/Neville.png'; import Okocha from './image/profile/Okocha.png'; import Pauleta from './image/profile/Pauleta.png';
import Bierhoff from './image/profile/Bierhoff.png'; import Carragher from './image/profile/Carragher.png'; import Luis from './image/profile/Luis.png';
import Solskjaer from './image/profile/Solskjaer.png'; import Sheringham from './image/profile/Sheringham.png'; import Seaman from './image/profile/Seaman.png';
import Barnes from './image/profile/Barnes.png'; import DeBoer from './image/profile/DeBoer.png'; import Pauler from './image/profile/Pauler.png';
import Baia from './image/profile/Baia.png'; import BLaudrup from './image/profile/BLaudrup.png'; import Hidetoshi from './image/profile/Hidetoshi.png';

import Argentina from './image/nation/Argentina.png'; import Brazil from './image/nation/Brazil.png';
import France from './image/nation/France.png'; import Italy from './image/nation/Italy.png';
import Portugal from './image/nation/Portugal.png'; import Spain from './image/nation/Spain.png';
import Korea from './image/nation/Korea.png'; import Bulgaria from './image/nation/Bulgaria.png';
import Cameroon from './image/nation/Cameroon.png'; import Checo from './image/nation/Checo.png';
import CotedIvoire from './image/nation/CotedIvoire.png'; import Croatia from './image/nation/Croatia.png';
import Denmark from './image/nation/Denmark.png'; import Finland from './image/nation/Finland.png';
import Germany from './image/nation/Germany.png'; import Ghana from './image/nation/Ghana.png';
import Hungary from './image/nation/Hungary.png'; import Ireland from './image/nation/Ireland.png';
import Japan from './image/nation/Japan.png'; import Mexico from './image/nation/Mexico.png';
import Netherlands from './image/nation/Netherlands.png'; import Norway from './image/nation/Norway.png';
import Rumania from './image/nation/Rumania.png'; import Russia from './image/nation/Russia.png';
import Scotland from './image/nation/Scotland.png'; import Serbia from './image/nation/Serbia.png';
import Sweden from './image/nation/Sweden.png'; import Wales from './image/nation/Wales.png';
import England from './image/nation/England.png'; import Nigeria from './image/nation/Nigeria.png';


function Icon() {
    const [num, setNum] = useState(0);

    const handleClick = () => {
        setNum(Math.random() * 100);
    }

    return (
        <div className="pack_div">
            <p className="pack_title">[AG] 19, 20, 21 Special ICON 선수팩</p>
            {/* <p style={{ color: 'grey' }}>{num}</p> */}
            {(() => {
                switch (true) {
                    case (num > 99.8217472106):
                        // 0.1782531200보다 0.0000003306 낮음 => 0.1782527894
                        return <Result profile={Ronaldo} name={"호나우두"} reinforce={1} overall={112} position={"ST"} nation={Brazil} pay={27} price={487_000_000_000} />
                    case (num > 99.6434940905 && num <= 99.8217472106):
                        return <Result profile={Cha} name={"차범근"} reinforce={1} overall={109} position={"ST"} nation={Korea} pay={25} price={393_000_000_000} />
                    case (num > 99.4652409704 && num <= 99.6434940905):
                        return <Result profile={Beckham} name={"데이비드 베컴"} reinforce={1} overall={110} position={"RM"} nation={England} pay={25} price={350_000_000_000} />
                    case (num > 99.2869878503 && num <= 99.4652409704):
                        return <Result profile={Henry} name={"티에리 앙리"} reinforce={1} overall={110} position={"ST"} nation={France} pay={26} price={242_000_000_000} />
                    case (num > 99.1087347302 && num <= 99.2869878503):
                        return <Result profile={Torres} name={"페르난도 토레스"} reinforce={1} overall={108} position={"ST"} nation={Spain} pay={25} price={194_000_000_000} />
                    case (num > 98.7522284901 && num <= 99.1087347302):
                        return <Result profile={Eto} name={"사뮈엘 에토"} reinforce={1} overall={110} position={"ST"} nation={Cameroon} pay={25} price={157_000_000_000} />
                    case (num > 98.3957222500 && num <= 98.7522284901):
                        return <Result profile={Kaka} name={"카카"} reinforce={1} overall={110} position={"CAM"} nation={Brazil} pay={26} price={210_000_000_000} />
                    case (num > 98.2174691299 && num <= 98.3957222500):
                        return <Result profile={VanPersie} name={"로빈 반페르시"} reinforce={1} overall={109} position={"ST"} nation={Netherlands} pay={25} price={93_000_000_000} />
                    case (num > 97.8609628898 && num <= 98.2174691299):
                        return <Result profile={Park} name={"박지성"} reinforce={1} overall={108} position={"CM"} nation={Korea} pay={24} price={92_300_000_000} />
                    case (num > 97.5044566497 && num <= 97.8609628898):
                        return <Result profile={Drogba} name={"디디에 드로그바"} reinforce={1} overall={110} position={"ST"} nation={CotedIvoire} pay={26} price={91_400_000_000} />
                    case (num > 97.3262035296 && num <= 97.5044566497):
                        return <Result profile={Eusebio} name={"에우제비우"} reinforce={1} overall={111} position={"CF"} nation={Portugal} pay={27} price={59_500_000_000} />
                    case (num > 96.9696972895 && num <= 97.3262035296):
                        return <Result profile={Maldini} name={"파올로 말디니"} reinforce={1} overall={111} position={"CB"} nation={Italy} pay={26} price={80_000_000_000} />
                    case (num > 96.6131910494 && num <= 96.9696972895):
                        return <Result profile={Rijkaard} name={"프랑크 레이카르트"} reinforce={1} overall={110} position={"CDM"} nation={Netherlands} pay={26} price={92_000_000_000} />
                    case (num > 96.4349379293 && num <= 96.6131910494):
                        return <Result profile={Zidane} name={"지네딘 지단"} reinforce={1} overall={112} position={"CAM"} nation={France} pay={27} price={81_000_000_000} />
                    case (num > 96.2566848092 && num <= 96.4349379293):
                        return <Result profile={Rooney} name={"웨인 루니"} reinforce={1} overall={110} position={"CF"} nation={England} pay={25} price={260_000_000_000} />
                    case (num > 95.9001785691 && num <= 96.2566848092):
                        return <Result profile={Ronaldinho} name={"호나우지뉴"} reinforce={1} overall={111} position={"LW"} nation={Brazil} pay={26} price={69_900_000_000} />
                    case (num > 95.1871660890 && num <= 95.9001785691):
                        return <Result profile={Puskas} name={"페렌츠 푸스카스"} reinforce={1} overall={112} position={"CF"} nation={Hungary} pay={26} price={35_000_000_000} />
                    case (num > 94.4741536089 && num <= 95.1871660890):
                        return <Result profile={Xavi} name={"차비"} reinforce={1} overall={111} position={"CM"} nation={Spain} pay={25} price={42_000_000_000} />
                    case (num > 93.7611411288 && num <= 94.4741536089):
                        return <Result profile={Ballack} name={"미하엘 발락"} reinforce={1} overall={108} position={"CM"} nation={Germany} pay={25} price={144_000_000_000} />
                    case (num > 93.0481286487 && num <= 93.7611411288):
                        return <Result profile={Nesta} name={"알레산드로 네스타"} reinforce={1} overall={110} position={"CB"} nation={Italy} pay={25} price={46_000_000_000} />
                    case (num > 92.3351161686 && num <= 93.0481286487):
                        return <Result profile={Cantona} name={"에릭 칸토나"} reinforce={1} overall={110} position={"ST"} nation={France} pay={26} price={30_800_000_000} />
                    case (num > 91.6221036885 && num <= 92.3351161686):
                        return <Result profile={Vieira} name={"파트리크 비에이라"} reinforce={1} overall={109} position={"CDM"} nation={France} pay={26} price={28_000_000_000} />
                    case (num > 90.9090912084 && num <= 91.6221036885):
                        return <Result profile={Nedved} name={"파벨 네드베드"} reinforce={1} overall={109} position={"LM"} nation={Checo} pay={25} price={37_500_000_000} />
                    case (num > 90.1960787283 && num <= 90.9090912084):
                        return <Result profile={Schweinsteiger} name={"B.슈바인슈타이거"} reinforce={1} overall={108} position={"CM"} nation={Germany} pay={24} price={28_500_000_000} />
                    case (num > 89.4830662482 && num <= 90.1960787283):
                        return <Result profile={Ferdinand} name={"리오 퍼디난드"} reinforce={1} overall={108} position={"CB"} nation={England} pay={25} price={31_200_000_000} />
                    case (num > 88.7700537681 && num <= 89.4830662482):
                        return <Result profile={Vidic} name={"네마냐 비디치"} reinforce={1} overall={107} position={"CB"} nation={Serbia} pay={24} price={28_500_000_000} />
                    case (num > 88.0570412880 && num <= 88.7700537681):
                        return <Result profile={Scholes} name={"폴 스콜스"} reinforce={1} overall={108} position={"CM"} nation={England} pay={24} price={31_200_000_000} />
                    case (num > 87.3440288079 && num <= 88.0570412880):
                        return <Result profile={Pirlo} name={"안드레아 피를로"} reinforce={1} overall={110} position={"CM"} nation={Italy} pay={25} price={24_400_000_000} />
                    case (num > 86.6310163278 && num <= 87.3440288079):
                        return <Result profile={Cruyff} name={"요한 크루이프"} reinforce={1} overall={112} position={"CF"} nation={Netherlands} pay={27} price={31_700_000_000} />
                    case (num > 85.9180038477 && num <= 86.6310163278):
                        return <Result profile={Effenberg} name={"슈테판 에펜베르크"} reinforce={1} overall={106} position={"CM"} nation={Germany} pay={24} price={21_000_000_000} />
                    case (num > 85.2049913676 && num <= 85.9180038477):
                        return <Result profile={Sanchez} name={"우고 산체스"} reinforce={1} overall={110} position={"ST"} nation={Mexico} pay={25} price={17_000_000_000} />
                    case (num > 84.4919788875 && num <= 85.2049913676):
                        return <Result profile={Puyol} name={"카를레스 푸욜"} reinforce={1} overall={109} position={"CB"} nation={Spain} pay={24} price={24_900_000_000} />
                    case (num > 83.7789664074 && num <= 84.4919788875):
                        return <Result profile={Essien} name={"마이클 에시앙"} reinforce={1} overall={107} position={"CDM"} nation={Ghana} pay={23} price={20_000_000_000} />
                    case (num > 82.7094476873 && num <= 83.7789664074):
                        return <Result profile={Cafu} name={"카푸"} reinforce={1} overall={110} position={"RB"} nation={Brazil} pay={25} price={18_000_000_000} />
                    case (num > 81.6399289672 && num <= 82.7094476873):
                        return <Result profile={Yashin} name={"레프 야신"} reinforce={1} overall={111} position={"GK"} nation={Russia} pay={23} price={21_000_000_000} />
                    case (num > 80.5704102471 && num <= 81.6399289672):
                        return <Result profile={Casillas} name={"카시야스"} reinforce={1} overall={110} position={"GK"} nation={Spain} pay={22} price={9_010_000_000} />
                    case (num > 79.5008915270 && num <= 80.5704102471):
                        return <Result profile={Baggio} name={"로베르토 바조"} reinforce={1} overall={111} position={"CAM"} nation={Italy} pay={26} price={20_700_000_000} />
                    case (num > 78.4313728069 && num <= 79.5008915270):
                        return <Result profile={Dalglish} name={"케니 달글리시"} reinforce={1} overall={109} position={"ST"} nation={Scotland} pay={25} price={8_200_000_000} />
                    case (num > 77.3618540868 && num <= 78.4313728069):
                        return <Result profile={Garrincha} name={"가린샤"} reinforce={1} overall={111} position={"RW"} nation={Brazil} pay={26} price={21_300_000_000} />
                    case (num > 76.2923353667 && num <= 77.3618540868):
                        return <Result profile={Crespo} name={"에르난 크레스포"} reinforce={1} overall={108} position={"ST"} nation={Argentina} pay={25} price={12_500_000_000} />
                    case (num > 75.2228166466 && num <= 76.2923353667):
                        return <Result profile={Hagi} name={"게오르게 하지"} reinforce={1} overall={108} position={"CAM"} nation={Rumania} pay={24} price={7_670_000_000} />
                    case (num > 74.1532979265 && num <= 75.2228166466):
                        return <Result profile={Seedorf} name={"클라렌스 세이도르프"} reinforce={1} overall={108} position={"CAM"} nation={Netherlands} pay={25} price={10_500_000_000} />
                    case (num > 73.0837792064 && num <= 74.1532979265):
                        return <Result profile={Carlos} name={"호베르투 카를루스"} reinforce={1} overall={110} position={"LB"} nation={Brazil} pay={25} price={11_600_000_000} />
                    case (num > 72.0142604863 && num <= 73.0837792064):
                        return <Result profile={RoyKeane} name={"로이 킨"} reinforce={1} overall={108} position={"CDM"} nation={Ireland} pay={24} price={7_500_000_000} />
                    case (num > 70.5882355262 && num <= 72.0142604863):
                        return <Result profile={Owen} name={"마이클 오언"} reinforce={1} overall={109} position={"ST"} nation={England} pay={24} price={7_500_000_000} />
                    case (num > 69.1622105661 && num <= 70.5882355262):
                        return <Result profile={Lahm} name={"필립 람"} reinforce={1} overall={109} position={"RB"} nation={Germany} pay={25} price={7_180_000_000} />
                    case (num > 67.7361856060 && num <= 69.1622105661):
                        return <Result profile={DelPiero} name={"A.델피에로"} reinforce={1} overall={109} position={"CF"} nation={Italy} pay={25} price={8_570_000_000} />
                    case (num > 66.3101606459 && num <= 67.7361856060):
                        return <Result profile={Bergkamp} name={"데니스 베르캄프"} reinforce={1} overall={109} position={"CF"} nation={Netherlands} pay={25} price={7_280_000_000} />
                    case (num > 64.8841356858 && num <= 66.3101606459):
                        return <Result profile={Desailly} name={"마르셀 드사이"} reinforce={1} overall={107} position={"CB"} nation={France} pay={24} price={8_320_000_000} />
                    case (num > 63.4581107257 && num <= 64.8841356858):
                        return <Result profile={Cannavaro} name={"파비오 칸나바로"} reinforce={1} overall={109} position={"CB"} nation={Italy} pay={24} price={6_700_000_000} />
                    case (num > 62.0320857656 && num <= 63.4581107257):
                        return <Result profile={Raul} name={"라울"} reinforce={1} overall={109} position={"ST"} nation={Spain} pay={25} price={6_000_000_000} />
                    case (num > 60.6060608055 && num <= 62.0320857656):
                        return <Result profile={Alberto} name={"카를루스 아우베르투"} reinforce={1} overall={109} position={"RB"} nation={Brazil} pay={24} price={7_250_000_000} />
                    case (num > 59.1800358454 && num <= 60.6060608055):
                        return <Result profile={Lampard} name={"프랭크 램파드"} reinforce={1} overall={108} position={"CM"} nation={England} pay={25} price={5_830_000_000} />
                    case (num > 57.7540108853 && num <= 59.1800358454):
                        return <Result profile={Rivaldo} name={"히바우두"} reinforce={1} overall={109} position={"LW"} nation={Brazil} pay={25} price={7_190_000_000} />
                    case (num > 56.3279859252 && num <= 57.7540108853):
                        return <Result profile={Overmars} name={"M.오베르마르스"} reinforce={1} overall={106} position={"LW"} nation={Netherlands} pay={23} price={12_200_000_000} />
                    case (num > 54.9019609651 && num <= 56.3279859252):
                        return <Result profile={Blanc} name={"로랑 블랑"} reinforce={1} overall={108} position={"CB"} nation={France} pay={25} price={7_800_000_000} />
                    case (num > 53.4759360050 && num <= 54.9019609651):
                        return <Result profile={Gerrard} name={"스티븐 제라드"} reinforce={1} overall={108} position={"CM"} nation={England} pay={25} price={6_290_000_000} />
                    case (num > 52.0499110449 && num <= 53.4759360050):
                        return <Result profile={Petit} name={"에마뉘엘 프티"} reinforce={1} overall={107} position={"CDM"} nation={France} pay={24} price={6_580_000_000} />
                    case (num > 50.6238860848 && num <= 52.0499110449):
                        return <Result profile={Kluivert} name={"P.클라위베르트"} reinforce={1} overall={107} position={"ST"} nation={Netherlands} pay={25} price={53_200_000_000} />
                    case (num > 49.1978611247 && num <= 50.6238860848):
                        return <Result profile={Butragueno} name={"부트라게뇨"} reinforce={1} overall={108} position={"ST"} nation={Spain} pay={24} price={5_600_000_000} />
                    case (num > 47.7718361646 && num <= 49.1978611247):
                        return <Result profile={Riquelme} name={"리켈메"} reinforce={1} overall={106} position={"CAM"} nation={Argentina} pay={23} price={5_030_000_000} />
                    case (num > 46.3458112045 && num <= 47.7718361646):
                        return <Result profile={Inzaghi} name={"필리포 인자기"} reinforce={1} overall={108} position={"ST"} nation={Italy} pay={25} price={5_350_000_000} />
                    case (num > 44.9197862444 && num <= 46.3458112045):
                        return <Result profile={Hierro} name={"페르난도 이에로"} reinforce={1} overall={108} position={"CB"} nation={Spain} pay={24} price={4_050_000_000} />
                    case (num > 43.4937612843 && num <= 44.9197862444):
                        return <Result profile={Zanetti} name={"하비에르 사네티"} reinforce={1} overall={108} position={"LB"} nation={Argentina} pay={24} price={4_400_000_000} />
                    case (num > 42.0677363242 && num <= 43.4937612843):
                        return <Result profile={Makelele} name={"클로드 마켈렐레"} reinforce={1} overall={108} position={"CDM"} nation={France} pay={24} price={4_350_000_000} />
                    case (num > 40.6417113641 && num <= 42.0677363242):
                        return <Result profile={Larsson} name={"헨릭 라르손"} reinforce={1} overall={107} position={"ST"} nation={Sweden} pay={23} price={4_460_000_000} />
                    case (num > 39.2156864040 && num <= 40.6417113641):
                        return <Result profile={Cech} name={"페트르 체흐"} reinforce={1} overall={108} position={"GK"} nation={Checo} pay={22} price={4_030_000_000} />
                    case (num > 37.7896614439 && num <= 39.2156864040):
                        return <Result profile={Campbell} name={"솔 캠벨"} reinforce={1} overall={106} position={"CB"} nation={England} pay={24} price={5_950_000_000} />
                    case (num > 36.3636364838 && num <= 37.7896614439):
                        return <Result profile={Stoitchkov} name={"H.스토이치코프"} reinforce={1} overall={108} position={"ST"} nation={Bulgaria} pay={24} price={5_500_000_000} />
                    case (num > 34.9376115237 && num <= 36.3636364838):
                        return <Result profile={Lineker} name={"게리 리네커"} reinforce={1} overall={108} position={"ST"} nation={England} pay={24} price={5_290_000_000} />
                    case (num > 33.5115865636 && num <= 34.9376115237):
                        return <Result profile={Schmeichel} name={"페터 슈마이켈"} reinforce={1} overall={108} position={"GK"} nation={Denmark} pay={22} price={4_440_000_000} />
                    case (num > 32.0855616035 && num <= 33.5115865636):
                        return <Result profile={Koeman} name={"로날트 쿠만"} reinforce={1} overall={108} position={"CB"} nation={Netherlands} pay={24} price={5_150_000_000} />
                    case (num > 30.6595366434 && num <= 32.0855616035):
                        return <Result profile={Rush} name={"이언 러시"} reinforce={1} overall={108} position={"ST"} nation={Wales} pay={24} price={5_220_000_000} />
                    case (num > 29.2335116833 && num <= 30.6595366434):
                        return <Result profile={VanDersar} name={"에드윈 반데르사르"} reinforce={1} overall={107} position={"GK"} nation={Netherlands} pay={21} price={6_500_000_000} />
                    case (num > 27.8074867232 && num <= 29.2335116833):
                        return <Result profile={Vieri} name={"크리스티안 비에리"} reinforce={1} overall={107} position={"ST"} nation={Italy} pay={24} price={3_400_000_000} />
                    case (num > 26.7379680031 && num <= 27.8074867232):
                        return <Result profile={RuiCosta} name={"후이 코스타"} reinforce={1} overall={107} position={"CAM"} nation={Portugal} pay={24} price={4_930_000_000} />
                    case (num > 25.6684492830 && num <= 26.7379680031):
                        return <Result profile={Trezeguet} name={"다비드 트레제게"} reinforce={1} overall={107} position={"ST"} nation={France} pay={24} price={3_450_000_000} />
                    case (num > 24.5989305629 && num <= 25.6684492830):
                        return <Result profile={Deco} name={"데쿠"} reinforce={1} overall={107} position={"CM"} nation={Portugal} pay={24} price={3_210_000_000} />
                    case (num > 23.5294118428 && num <= 24.5989305629):
                        return <Result profile={Zambrotta} name={"잔루카 잠브로타"} reinforce={1} overall={107} position={"RB"} nation={Italy} pay={24} price={3_550_000_000} />
                    case (num > 22.4598931227 && num <= 23.5294118428):
                        return <Result profile={Gattuso} name={"젠나로 가투소"} reinforce={1} overall={107} position={"CDM"} nation={Italy} pay={23} price={3_860_000_000} />
                    case (num > 21.3903744026 && num <= 22.4598931227):
                        return <Result profile={Socrates} name={"소크라테스"} reinforce={1} overall={107} position={"CAM"} nation={Brazil} pay={25} price={4_080_000_000} />
                    case (num > 20.3208556825 && num <= 21.3903744026):
                        return <Result profile={Guardiola} name={"과르디올라"} reinforce={1} overall={107} position={"CDM"} nation={Spain} pay={24} price={2_750_000_000} />
                    case (num > 19.2513369624 && num <= 20.3208556825):
                        return <Result profile={Veron} name={"베론"} reinforce={1} overall={107} position={"CM"} nation={Argentina} pay={24} price={3_250_000_000} />
                    case (num > 18.1818182423 && num <= 19.2513369624):
                        return <Result profile={MLaudrup} name={"미카엘 라우드루프"} reinforce={1} overall={107} position={"CAM"} nation={Denmark} pay={24} price={4_290_000_000} />
                    case (num > 17.1122995222 && num <= 18.1818182423):
                        return <Result profile={Wright} name={"이언 라이트"} reinforce={1} overall={107} position={"ST"} nation={England} pay={24} price={3_890_000_000} />
                    case (num > 16.0427808021 && num <= 17.1122995222):
                        return <Result profile={Pires} name={"로베르 피레스"} reinforce={1} overall={106} position={"LM"} nation={France} pay={24} price={2_890_000_000} />
                    case (num > 14.9732620820 && num <= 16.0427808021):
                        return <Result profile={Ljungberg} name={"프레디 융베리"} reinforce={1} overall={105} position={"RM"} nation={Sweden} pay={23} price={4_310_000_000} />
                    case (num > 14.2602496019 && num <= 14.9732620820):
                        return <Result profile={Zola} name={"잔프랑코 졸라"} reinforce={1} overall={106} position={"CF"} nation={Italy} pay={23} price={2_860_000_000} />
                    case (num > 13.5472371218 && num <= 14.2602496019):
                        return <Result profile={Litmanen} name={"야리 리트마넨"} reinforce={1} overall={106} position={"CAM"} nation={Finland} pay={23} price={2_800_000_000} />
                    case (num > 12.8342246417 && num <= 13.5472371218):
                        return <Result profile={Brehme} name={"안드레아스 브레메"} reinforce={1} overall={106} position={"LWB"} nation={Germany} pay={23} price={3_160_000_000} />
                    case (num > 12.1212121616 && num <= 12.8342246417):
                        return <Result profile={Futre} name={"파울루 푸트리"} reinforce={1} overall={106} position={"LW"} nation={Portugal} pay={24} price={2_800_000_000} />
                    case (num > 11.4081996815 && num <= 12.1212121616):
                        return <Result profile={Cole} name={"애슐리 콜"} reinforce={1} overall={106} position={"LB"} nation={England} pay={23} price={2_360_000_000} />
                    case (num > 10.6951872014 && num <= 11.4081996815):
                        return <Result profile={Suker} name={"다보르 슈케르"} reinforce={1} overall={105} position={"ST"} nation={Croatia} pay={24} price={1_500_000_000} />
                    case (num > 9.9821747213 && num <= 10.6951872014):
                        return <Result profile={Neville} name={"게리 네빌"} reinforce={1} overall={105} position={"RB"} nation={England} pay={23} price={1_750_000_000} />
                    case (num > 9.2691622412 && num <= 9.9821747213):
                        return <Result profile={Okocha} name={"제이-제이 오코차"} reinforce={1} overall={105} position={"CAM"} nation={Nigeria} pay={23} price={1_870_000_000} />
                    case (num > 8.5561497611 && num <= 9.2691622412):
                        return <Result profile={Pauleta} name={"파울레타"} reinforce={1} overall={105} position={"ST"} nation={Portugal} pay={23} price={1_800_000_000} />
                    case (num > 7.8431372810 && num <= 8.5561497611):
                        return <Result profile={Bierhoff} name={"올리버 비어호프"} reinforce={1} overall={105} position={"ST"} nation={Germany} pay={23} price={1_580_000_000} />
                    case (num > 7.1301248009 && num <= 7.8431372810):
                        return <Result profile={Carragher} name={"제이미 캐러거"} reinforce={1} overall={105} position={"CB"} nation={England} pay={23} price={1_820_000_000} />
                    case (num > 6.4171123208 && num <= 7.1301248009):
                        return <Result profile={Luis} name={"루이스 에르난데스"} reinforce={1} overall={105} position={"ST"} nation={Mexico} pay={23} price={1_650_000_000} />
                    case (num > 5.7040998407 && num <= 6.4171123208):
                        return <Result profile={Solskjaer} name={"올레 군나르 솔샤르"} reinforce={1} overall={104} position={"ST"} nation={Norway} pay={23} price={987_000_000} />
                    case (num > 4.9910873606 && num <= 5.7040998407):
                        return <Result profile={Sheringham} name={"테디 셰링엄"} reinforce={1} overall={104} position={"ST"} nation={England} pay={23} price={758_000_000} />
                    case (num > 4.2780748805 && num <= 4.9910873606):
                        return <Result profile={Seaman} name={"데이비드 시먼"} reinforce={1} overall={104} position={"GK"} nation={England} pay={20} price={892_000_000} />
                    case (num > 3.5650624004 && num <= 4.2780748805):
                        return <Result profile={Barnes} name={"존 반스"} reinforce={1} overall={104} position={"LW"} nation={England} pay={23} price={948_000_000} />
                    case (num > 2.8520499203 && num <= 3.5650624004):
                        return <Result profile={DeBoer} name={"프랑크 더부르"} reinforce={1} overall={104} position={"CB"} nation={Netherlands} pay={23} price={1_060_000_000} />
                    case (num > 2.1390374402 && num <= 2.8520499203):
                        return <Result profile={Pauler} name={"로비 파울러"} reinforce={1} overall={104} position={"ST"} nation={England} pay={23} price={929_000_000} />
                    case (num > 1.4260249601 && num <= 2.1390374402):
                        return <Result profile={Baia} name={"비토르 바이아"} reinforce={1} overall={104} position={"GK"} nation={Portugal} pay={20} price={889_000_000} />
                    case (num > 0.7130124800 && num <= 1.4260249601):
                        return <Result profile={BLaudrup} name={"브리안 라우드루프"} reinforce={1} overall={103} position={"CF"} nation={Denmark} pay={23} price={808_000_000} />
                    case (num > 0 && num <= 0.7130124800):
                        return <Result profile={Hidetoshi} name={"나카타 히데토시"} reinforce={1} overall={102} position={"CAM"} nation={Japan} pay={22} price={991_000_000} />
                    default:
                        return <div className="pack_before"><img alt="" src={IconPack} /></div>
                }
            })()}
            <button className="pack_button" onClick={handleClick}>OPEN</button>
        </div>
    );
}
export default Icon;