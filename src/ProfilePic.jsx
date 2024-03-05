import imageUrl from './assets/download.jpg'

function ProfilePic(){

    const handleClick = (e) => e.target.style.display = "none";
    
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    )
}

export default ProfilePic;