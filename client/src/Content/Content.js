import PropTypes from "prop-types"

import Card from "../Card/Card.js"

function Content({tweets}){

    return tweets.map((element) => {
        return<Card tweet={element} key={element.id}/>;
    })

}

// 
Content.propTypes = {tweets: PropTypes.array};

export default Content;