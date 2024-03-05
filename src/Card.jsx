import profilePic from './assets/download.jpg';
import Button from './Button/Button';
import NewButton from './NewButton';

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>React Card</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus velit nesciunt commodi est, iure a recusandae voluptates fugit eum porro assumenda omnis, temporibus neque harum pariatur nam maxime quam!</p>
            <Button></Button>
            <NewButton></NewButton>
        </div>
    )
}

export default Card;