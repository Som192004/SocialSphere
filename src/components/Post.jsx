import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({post}) => {
    const {deletePost , addViews} = useContext(PostList) ; 
    return <div class="card post-card" >
            
  <div class="card-body">
    <h5 class="card-title">{post.title}
    <span onClick = { () => addViews(post.views , post.id)}class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {post.views}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
    <p class="card-text">{post.body}</p>
    {post.tags && post.tags.map((tag) => (<span class="badge text-bg-primary hashtag">{tag}</span>))} 

    <center onClick={() => deletePost(post.id)}><MdDelete  size={40}/></center>
    
  </div>
</div>
        
    

}

export default Post ; 