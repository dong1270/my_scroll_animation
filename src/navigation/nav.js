import { useEffect, useState } from 'react';
import "../App.css";
import "./nav.css";

export default function MyNav() {
    const [mobileMenu, setMobileMenu] = useState(true);
    const [mobileNav, setMobileNav] = useState();
    const [mobileFrame, setMobileFrame] =useState();

    const [head, setHead] = useState(document.querySelector('.header'));
    const [content1, setContent1] = useState(document.querySelector('.content1'));
    const [content2, setContent2] = useState(document.querySelector('.content2'));
    const [content3, setContent3] = useState(document.querySelector('.content3'));
    
    let clickNav = (e, position) => window.scroll({top: position, behavior: 'smooth'});
    
    useEffect(() => {
        setMobileNav(document.getElementById("mobile-menu"));
        setMobileFrame(document.getElementById("mobile-frame"));
        if(head == null) setHead(document.querySelector('.header'));
        if(content1 == null) setContent1(document.querySelector('.contents'));
        if(content2 == null) setContent2(document.querySelector('.content2'));
        if(content3 == null) setContent3(document.querySelector('.content3'));
    }, [mobileNav]);
    
    const touchMenu = () => {
        if(mobileMenu) {
            mobileNav.classList.replace("menu-open", "menu-close");
            mobileFrame.classList.replace("mobile-frame-open", "mobile-frame-close");
            setMobileMenu(false);
        } else {
            mobileNav.classList.replace("menu-close", "menu-open");
            mobileFrame.classList.replace("mobile-frame-close", "mobile-frame-open");
            setMobileMenu(true);
        }
    }

    return (
        <div className='nav-div'>
            <header className="mobile-view">
                <div className="nav-var">
                    <div className="logo" href="/"><a>DS_Trip</a></div>
                    <div className="nav-menu">
                    <ul>
                        <li>
                            <a key={0} className="item" onClick={ e => clickNav(e, head.offsetTop)}>Home</a>
                        </li>
                        <li>
                            <a key={1} className="item" onClick={ e => clickNav(e, content1.offsetTop)}>Osaka</a>
                        </li>
                        <li>
                            <a key={2} className="item" onClick={ e => clickNav(e, content2.offsetTop)}>Chuncheon</a>
                        </li>
                        <li>
                            <a key={3} className="item" onClick={ e => clickNav(e, content3.offsetTop)}>Taean</a>
                        </li>
                    </ul>
                    </div>
                    {/* 모바일 메뉴 */}
                    <div id='mobile-menu' className="menu-open" onClick={touchMenu}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    {/* 모바일 메뉴 */}
                </div>
            </header>


            <div id='mobile-frame' className="mobile-frame-open">
                <div className="mobile-list-frame">
                    <ul className="mobile-list">
                        <li>
                            <a key={0} className="item" onClick={ e => clickNav(e, head.offsetTop)}>Home</a>
                        </li>
                        <li>
                            <a key={1} className="item" onClick={ e => clickNav(e, content1.offsetTop)}>Osaka</a>
                        </li>
                        <li>
                            <a key={2} className="item" onClick={ e => clickNav(e, content2.offsetTop)}>Chuncheon</a>
                        </li>
                        <li>
                            <a key={3} className="item" onClick={ e => clickNav(e, content3.offsetTop)}>Taean</a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-backgraund"/>
            </div>
        </div>
    )
}