

const WelcomeMessage = ({onGetPosts}) => {
    const handleAlert = () => {
        alert('You have not logged in Yet ')
    }

    const token = localStorage.getItem('token') ;

    return <center className="wel-mes"><h1>
        Ooops . . . There is no any post . . . 
    </h1>
    <button onClick = {token ? onGetPosts : handleAlert} type="button" class="btn btn-primary">See previous Posts</button>
    </center>
}

export default WelcomeMessage ; 