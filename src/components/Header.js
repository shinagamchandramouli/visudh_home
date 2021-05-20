import React, { useEffect, useState } from 'react'
import './css/Header.css'

function Header() {

    const [active, setActive] = useState(0)

    useEffect(()=>{
        const list_element = document.getElementsByClassName(`active`)[0];
        const list_elements = document.getElementsByClassName(`nav-list`);

        const bg_active = document.getElementsByClassName('bg-active')[0];

        let left_offset = list_element.offsetLeft.toString() + "px";
        bg_active.style.left = left_offset;
        
        window.addEventListener('resize', ()=>{
            let offset = list_element.offsetLeft.toString() + "px";
            bg_active.style.transition = 'all 0s';
            bg_active.style.left = offset;
            setTimeout(function() {
                bg_active.style.transition = 'all 0.5s';
                
            }, 250);

            // for hamburger bug

            if(window.innerWidth > 997) {
                const ham_burger_nav = document.getElementById('list-holder');
                ham_burger_nav.classList.toggle('ham-burger-nav',false)
                const icon = document.getElementsByClassName('ham')[0];
                icon.classList.toggle('close',false);
                document.getElementsByClassName('separator')[0].classList.toggle('separate', false);
            }


        })

        for(let i=0; i<list_elements.length; i++)
        {
            list_elements[i].addEventListener('mouseover',()=>{
                let offset = list_elements[i].offsetLeft.toString() + "px";
                bg_active.style.left = offset;
            });

            list_elements[i].addEventListener('mouseleave', ()=>{
                let offset = list_element.offsetLeft.toString() + "px";
                bg_active.style.left = offset;
            })

            // console.log(i);
        }

        const ham_burger = document.getElementsByClassName('ham-burger')[0];
        ham_burger.addEventListener('click', ()=>{
            const ham_burger_nav = document.getElementById('list-holder');
            ham_burger_nav.classList.toggle('ham-burger-nav')
            const icon = document.getElementsByClassName('ham')[0];
            icon.classList.toggle('close');

            document.getElementsByClassName('separator')[0].classList.toggle('separate');

        })

    })




    return (
        <header>
            <nav>
                <div className="logo">
                    Visudh Ajivam
                </div>
                <ul id = 'list-holder' >
                    <li className = {`nav-list ${ active === 0 ? "active" : ""} `} onClick = {()=>setActive(0)} >Home</li>
                    <li className = {`nav-list ${ active === 1 ? "active" : ""} `} onClick = {()=>setActive(1)} >About</li>
                    <li className = {`nav-list ${ active === 2 ? "active" : ""} `} onClick = {()=>setActive(2)} >Services</li>
                    <li className = {`nav-list ${ active === 3 ? "active" : ""} `} onClick = {()=>setActive(3)} >Departments</li>
                    <li className = {`nav-list ${ active === 4 ? "active" : ""} `} onClick = {()=>setActive(4)} >Doctors</li>
                    <li className = {`nav-list ${ active === 5 ? "active" : ""} `} onClick = {()=>setActive(5)} >Contact</li>
                    <li className = {`nav-list ${ active === 6 ? "active" : ""} `} onClick = {()=>setActive(6)} >Login</li>
                    <div className="bg-active"></div>
                </ul>
                <label className = 'ham-burger'>
                    <img className = 'ham' src = 'images/hamburger.svg' ></img>
                </label>
            </nav>
        </header>
    )
}

export default Header
