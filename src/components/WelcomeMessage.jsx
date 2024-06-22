const WelcomeMessage = ({onGetPosts}) => {
    return <center className="wel-mes"><h1>
        Ooops . . . There is no any post . . . 
    </h1>
    <button onClick = {onGetPosts} type="button" class="btn btn-primary">See previous Posts</button>
    </center>
}

export default WelcomeMessage ; 