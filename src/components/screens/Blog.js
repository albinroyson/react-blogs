import React,{ useState,useEffect } from 'react'
import styled from 'styled-components'
import {Helmet} from "react-helmet";
import axios from "axios"
import { useParams } from "react-router";
import Header from '../screens/includes/Header'
export default function Blog({match}) {
    const {id} =useParams()
    const [Blog,setBlog]=useState({
        id:"",
        author:[]

    })
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
            .then((response) => {
            setBlog(response.data.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    return (
        <>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <Header/>
            <Blogcontainer>
                <Profilecontainer>
                    <Profilepic src={Blog.author.image}>
                    </Profilepic>
                </Profilecontainer>
                <Blogtitle>
                    {Blog.title}
                </Blogtitle>
                <Blogdate>
                        A gust post by <Link>{Blog.author.name}</Link> on {Blog.posted_date}
                </Blogdate>
                <Blogdiscription>
                    {Blog.description}
                </Blogdiscription>
            </Blogcontainer>
        </>
    )    
}
const Blogcontainer =styled.div`
    width:60%;
    margin: 94px auto;
    border: 1px solid #7e7e7e;
    padding:100px 100px;
    background:#fff;
    position: relative;`
const Profilepic =styled.img`
    display:block;
    width:100%;
    border-radius: 50%;`
const Profilecontainer =styled.div`
    position: absolute;
    top: -52px;
    right: 45%;
    width: 13%;
    border-radius: 50%;`
const Blogtitle =styled.h1`
    text-align: center;
    font-weight: 700;`
const Blogdate =styled.span`
    text-align:center;
    display:block;
    margin-top:20px;
    color:#7e7e7e;`
const Blogdiscription =styled.p`
   margin-top:50px;
   align-items:center;`
const Link =styled.a`
    color:#3475dc;`
const Read =styled.span`
    color:#3475dc;
    margin-top: 10px;
    display:block;
    cursor:pointer;`
    

