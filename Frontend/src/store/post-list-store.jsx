import { createContext } from "react";
import { useReducer } from "react";


export const PostList = createContext({postList : [] ,
    addPost : () => {} ,
    deletePost : () => {} ,
    addViews : () => {} , 
    addIntialPosts : () => {} ,
    }) ; 

const postListReducer = (currentPostList , action) => {
    let newPostList  ; 
    switch(action.type){
        case  'DELETE_POST' :
            newPostList = currentPostList.filter(post => post.id !== action.payload.id) ; 
            break ; 
        case 'ADD_POST' : 
            newPostList = [action.payload, ...currentPostList]
            break ; 
        case 'ADD_VIEWS' :
            newPostList = currentPostList.map(post => {
                if (post.id === action.payload.id) {
                    return { ...post, views: post.views + 1 };
                }
                return post;
            });
            break ; 
        case 'ADD_INITIAL_POST' : 
            newPostList = action.payload.posts ; 
            
            
            break ; 

            
    }
    return newPostList ; 
}

export const PostListProvider = ({children}) => {

    const addPost = (userIdData , postTitleData , postDescData , tagsData) => {
        dispatchPostList({
            type : 'ADD_POST' , 
            payload : {
                id :  Date.now() ,
                userId : userIdData ,
                title : postTitleData ,
                body : postDescData , 
                views : 0 , 
                tags : tagsData , 
            }
        })
    }

    const deletePost = (id) => {
        dispatchPostList(
            {
                type:"DELETE_POST" , 
                payload : {
                    id 
                }
            }
        )
    }
       
    const addViews = (views , id ) => {
        
        dispatchPostList({
            type : "ADD_VIEWS" ,
            payload : {
                id , 
                views 
            }
        })
    }

    const addIntialPosts = (posts) => {
        dispatchPostList({
            type : "ADD_INITIAL_POST" ,
            payload : {
                posts
            },
        });
    };
    
    const [postList , dispatchPostList] = useReducer(postListReducer , [] ) ; 

    return <PostList.Provider value = { {postList : postList , addPost : addPost , deletePost : deletePost , addViews : addViews , addIntialPosts : addIntialPosts}}>
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST = [] ; 



