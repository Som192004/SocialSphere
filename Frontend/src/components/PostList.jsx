import { useContext } from "react";
import Post from "./Post"
import { PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";


const PostList = ({tokenState , settokenState}) => {



    const { postList , addIntialPosts} = useContext(PostListData) ; 

    const [fetching , setFetching ] =  useState(false) ; 

    const handleGetPosts = () => {
        setFetching(true) ;
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data) => {
            addIntialPosts(data.posts)
            setFetching(false) ;
            
        });
        
    }
    return <>
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {!fetching && postList.length == 0 &&  <WelcomeMessage onGetPosts = {handleGetPosts}></WelcomeMessage>}
    
        {postList.map((post) => 
            <Post key = {post.id}  post = {post}></Post>
        )}

        
    </>


} ;

export default PostList ; 