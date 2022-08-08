import "./Nav.css";
import React, { useEffect,useState} from 'react';

export default function Nav() {
    const [show, setShow] = useState(false);
    useEffect(()=> {
        //스크롤시 색 변경
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                setShow(true);
            }else{
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll",()=>{});
        }
    }, [])
    return (
        <nav className={`nav ${show && "nav_black"} `}>
            {/* 로고 , 유저 아이콘 */}
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
                className='nav__logo'
                onClick={()=>window.location.reload()}
            />

            <img
                alt="User logged"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                className='nav__avater'
            />
        </nav>
    )
}

