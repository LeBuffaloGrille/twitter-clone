import PropTypes from "prop-types"
import moment from "moment"

import "./Card.css"

import Comment from "../Comment/Comment.js"

function Card({tweet}){

    let dt = moment(tweet.createdAt).fromNow()

     return(
        <div className="tweet" key={tweet.id}>
            <img src={tweet.user.profilePicture} className="img" alt='img'/>
            <div className="text firstTextColor">
                <span className="firstTextColor">{tweet.user.name}</span>
                <span className="secondTextColor"> • </span>
                <span className="secondTextColor">{dt}</span>
                <p id="text">{tweet.body}</p>
            </div>
            <div>{tweet.comments.length > 0 && <Comment comment={tweet.comments}/>}</div>
        </div>
    );
}

Card.propTypes = {tweet: PropTypes.object};

export default Card;