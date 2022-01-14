import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/images/moke..png'
import twitter from '../../../assets/images/twitter.png'
import instagram from '../../../assets/images/instagram.png'

export default function header() {
    return (
        <HeaderContainer>
            <LeftContaniner>
            <LogoImage src={logo}>
                </LogoImage>
            </LeftContaniner>
            <RightContainer>
                <Navlist>
                    <Navitem>
                        <Link>Get signal</Link>
                    </Navitem>
                    <Navitem>
                        <Link>support</Link>
                    </Navitem>
                    <Navitem>
                        <Link>Blog</Link>
                    </Navitem>
                    <Navitem>
                        <Link>Develepers</Link>
                    </Navitem>
                    <Navitem>
                        <Link>careers</Link>
                    </Navitem>
                    <Navitem>
                        <Link>Donate</Link>
                    </Navitem>
                    <Navitem>
                        <Link><TwitterImage src={twitter} /></Link>
                    </Navitem>
                    <Navitem>
                    <Link>
                        <Instaimage src={instagram} />
                    </Link>  
                    </Navitem> 
                </Navlist>
            </RightContainer>
        </HeaderContainer>
    )
}
const HeaderContainer =styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    margin:0 auto;
    padding:20px 10px;
    align-items:center;
    color:#f7f7f7;
    box-shadow: 5px 10px;`
const LeftContaniner =styled.div`
    margin-left:70px;
    width:10%;`
const LogoImage =styled.img`
    width:100%;
    display:block;`
const RightContainer =styled.div`
    width:40%;
    margin-right:70px;`
const Navlist =styled.ul`
    display:flex;
    justify-content:space-between;`
const Navitem =styled.li`
    align-items:center;`
const Link =styled.a`
    display:block;
    cursor: pointer;`
const TwitterImage =styled.img`
    width:100%;
    display:block;`
const Instaimage =styled.img`
    width:100%;
    display:block;`