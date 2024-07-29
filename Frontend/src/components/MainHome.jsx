import Footer from "./Footer" ; 
import SideBar from './SideBar';
import CreatePost from './CreatePost';
import PostList from "./PostList"
import { PostListProvider } from '../store/post-list-store' 
import { useState } from "react";


import { Link } from 'react-router-dom';


const MainHome = ({tokenState , settokenState}) => {
  const [selectedTab , setSelectedTab] = useState("Home") ; 

    return <>
  <PostListProvider>
  <div className='app-container'>
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>

    <div className='content'>
    
    {(selectedTab === "Home" ) ? <PostList tokenState = {tokenState} settokenState = {settokenState}></PostList> : <CreatePost></CreatePost>}

    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    </>
} ;

export default MainHome ; 

