import PropTypes from "prop-types"

import "./Card.css"

//import Comment from "../Comment/Comment.js"

function Card({tweet}){
    console.log(tweet, "blibli");
     return(
        <div className="tweet" key={tweet.id}>
            <img src={tweet.user.profilePicture} className="img" alt='img'/>
            <div className="text firstTextColor">
                <span>{tweet.user.name}</span>
                <span className="secondTextColor"> • </span>
                <span className="secondTextColor"></span>
                <p>{tweet.body}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    tweet: PropTypes.array.isRequired()
};

export default Card;