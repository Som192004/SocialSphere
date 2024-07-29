import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
const Post = ({post}) => {
    const {deletePost , addViews} = useContext(PostList) ; 
    const [likeCount ,setlikeCount] = useState(0) ;
    const [dislikeCount , setdislikeCount] = useState(0);
    const [islikehovered , setlikehovered] = useState(false);
    const [isdislikehovered , setdislikehovered] = useState(false);

    const onLike = () => {
      setlikeCount(likeCount + 1) ; 
      console.log(likeCount)
    }

    const onLikeHoverEnter = () => {
      setlikehovered(true);
      console.log('hovered ')
    }

    const onLikeHoverLeave = () => {
      setlikehovered(false);
    }

    const onDisLike = () => {
      setdislikeCount(dislikeCount + 1) ;
    }

    const onDisLikeHoverEnter = () => {
      setdislikehovered(true);
    }

    const onDisLikeHoverLeave = () => {
      setdislikehovered(false);
    }
    return <div class="card post-card" >
            
  <div class="card-body">
    <h5 class="card-title">{post.title}
    <span onClick = { () => addViews(post.views , post.id)}class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success pointerClass">
    {post.views}

    
    
    <span class="visually-hidden">unread messages</span>
  </span>
    
  </h5>
    <p class="card-text">{post.body}</p>
    {post.tags && post.tags.map((tag) => (<span class="badge text-bg-primary hashtag">{tag}</span>))} 
    <center></center>
    <center >
    {islikehovered && <span
    style={{
      position: 'relative',
      transform: 'translateX(-50%)',
      
      border: '1px solid black',
      padding: '2px 5px',

      borderRadius: '3px',
    }}
    className="bg-success rounded-pill"
  >
    {likeCount}
  </span>}
      <AiFillLike onMouseEnter={onLikeHoverEnter} onMouseLeave={onLikeHoverLeave} className="pointerClass marginClass" 
    onClick={onLike} size={40} />
  <MdDelete  className="pointerClass marginClass" onClick={() => deletePost(post.id)} size={40}/>
  {isdislikehovered && <span
    style={{
      position: 'relative',
      transform: 'translateX(-50%)',
      border: '1px solid black',
      padding: '2px 5px',
      borderRadius: '3px',
    }}
    className="bg-success rounded-pill"
  >
    {dislikeCount}
  </span>}
  <AiFillDislike onMouseEnter={onDisLikeHoverEnter} onMouseLeave={onDisLikeHoverLeave} className="pointerClass marginClass" onClick={onDisLike} size={40}/>
  
  </center>
    
    
  </div>
</div>
        
    

}

export default Post ; 