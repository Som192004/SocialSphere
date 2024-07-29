import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store" ;

const CreatePost = () => {
    
  const {addPost} = useContext(PostList) ; 
    const userId = useRef() ;
    const postTitle = useRef() ;
    const postDesc = useRef() ;
    const tags = useRef() ;

    const handleSubmit = (event) => {

      event.preventDefault(); 
    
    const token = localStorage.getItem('token') ;

      if(!token){
        alert("You haven't logged in yet . . . ") ;
         
      }
      else{

      const userIdData = userId.current.value ;
      const postTitleData = postTitle.current.value ;
      const postDescData = postDesc.current.value ; 
      const tagsData = tags.current.value.split(" ") ; 

      if (!userId || !postTitle || !postDesc || !tags.length) {
        alert("All fields are required.");
        return;
      }

      userId.current.value = "" ; 
      postTitle.current.value = "" ;
      postDesc.current.value = "" ; 
      tags.current.value = "" ;


      addPost(userIdData , postTitleData , postDescData , tagsData) ; 
    }
      
    }
    
    return <>
        <form className="create-post" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" 
    ref = {postTitle}
    className="form-control" id="title" placeholder="Enter the Title Of the Post"></input>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Description</label>
    <textarea type="text" rows = '4 'className="form-control" id="title" 
    ref = {postDesc}
    placeholder="Tell us more about it "></textarea>
    
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">UserName</label>
    <input type="text" 
    ref = {userId} className="form-control" id="title" placeholder="Enter Your UserName"></input>
    
  </div>

  
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Enter Your tags here </label>
    <input type="text" 
    ref = {tags}
    className="form-control" id="title" placeholder="Enter the tags with space "></input>
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>

} ;

export default CreatePost ;