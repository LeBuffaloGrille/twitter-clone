import PropTypes from "prop-types"
import moment from "moment"

import "../Card/Card.css"

function Comment({comment}){

    //console.log(comment[0].user.name);
    return comment.map((element) => {
        let dt = moment(element.createdAt).fromNow()
        return(
            <div className="tweet" key={element.id}>
                <img src={element.user.profilePicture} className="img" alt='img'/>
                <div className="text firstTextColor">
                    <span className="firstTextColor">{element.user.name}</span>
                    <span className="secondTextColor"> • </span>
                    <span className="secondTextColor">{dt}</span>
                    <p id="text">{element.body}</p>
                </div>
            </div>)
    })
}

Comment.propTypes = {comment: PropTypes.array};

export default Comment;