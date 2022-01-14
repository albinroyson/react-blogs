import React,{ useState,useEffect } from 'react'
import styled from 'styled-components'
import {Helmet} from "react-helmet";
import axios from "axios"
import Header from '../screens/includes/Header'
import { Link } from 'react-router-dom';
export default function Blogs() {
    const [blogs,setBlogs]= useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/blog/")
            .then((response) => {
            setBlogs(response.data.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 500) : text}
            <Read onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "read more..." : " show less"}
            </Read>
          </p>
        );
    };
    const renderBlogs =() =>{
        return blogs.map((Blog)=>(    
            <Blogcontainer >
                <Bloglink to={`/blog/${Blog.id}`} >
                    <Profilecontainer>
                        <Profilepic src={Blog.author.image}>
                        </Profilepic>
                    </Profilecontainer>
                    <Blogtitle>
                        {Blog.title}
                    </Blogtitle>
                    <Blogdate>
                            A gust post by <Linkname>{Blog.author.name}</Linkname> on {Blog.posted_date}
                    </Blogdate > 
                </Bloglink> 
                <Blogdiscription>
                        <ReadMore>
                            {Blog.description}
                        </ReadMore>
                </Blogdiscription>   
            </Blogcontainer>
        ))
    } 
    return (
        <>
             <Helmet>
                <title>Blogs</title>
            </Helmet>
            <Header/>
            <Maincontainer>
                <Heading>Blog Posts</Heading>
                {renderBlogs()} 
            </Maincontainer>
       </>
    ) 
}
const Maincontainer =styled.div`
    width:100%;
    margin:0 auto;
    background:#f7f7f7;
    position: relative;`
const Heading =styled.h3`
    text-align:center;
    font-size:30px;
    font-weight:800;
    padding-top: 76px;`
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
const Linkname =styled.a`
    color:#3475dc;`
const Read =styled.span`
    color:#3475dc;
    margin-top: 10px;
    display:block;
    cursor:pointer;`
const Bloglink =styled(Link)`
  display:block;
    appearance:none;`