import { useState } from "react";
import "./Prac_1.css"

const Prac_1 = () => {
    const [tab, setTab] = useState("");
    const tab1 = () => setTab(
        <div>
            <ul>    {/* rel="noopener noreferrer"는 rel=noopener 속성이 부여된 링크를 통해 
                        열린 페이지는 opener의 location변경과 같은 자바스크립트 요청을 거부*/}
                <li><a rel="noopener noreferrer" href="https://www.naver.com/" target="_blank">NAVER</a></li>
                <li><a rel="noopener noreferrer" href="https://www.google.com/" target="_blank">GOOGLE</a></li>
                <li><a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank">YOUTUBE</a></li>
            </ul>
        </div>
    );
    const tab2 = () => setTab(
        <div><br />
            <a href='#!'>We resolved the conflict with an approach that called for each and every page
                in the site to have three different layout sizes: small, medium and large.</a>
        </div>
    );
    const tab3 = () => setTab(
        <div><br /> {/* href속성이 없어도, 있어도 문제가 발생함. strict mode 에서 문제가 발생.
                        href={() => false} or href='#!' 를 작성. */}
            <a href='#!'>반응형 웹 디자인(responsive web design, RWD)이란
                하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는
                디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록
                만든 웹페이지 접근 기법을 말한다.</a>
        </div>
    );

    return (
        <div style={{ padding: "30px" }}>
            <button onClick={tab1}>tab1</button>
            <button onClick={tab2}>tab2</button>
            <button onClick={tab3}>tab3</button>
            <div>{tab}</div>
        </div>
    )
}

export default Prac_1;