function UserProfile(props){
    return(
        <div>
            Name:{props.name}
            <br></br>
            Email:{props.email}
            <br></br>
            Bio:{props.bio}
            <hr></hr>
        </div>
    )
}
export default UserProfile;