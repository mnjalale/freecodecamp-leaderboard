import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

function CamperDetail(props){
    let {img,username,recent,alltime} = props.user;

     return (
        <div className="data-row">
            <div className="col-xs-1 data-cell right-border">
                <h4>{props.position}</h4>
            </div>
            <div className="col-xs-5 data-cell right-border">
                <div className="col-xs-2">
                    <img src={img} height="50px" width="50px" style={{margin:'5px'}} className="image img-rounded"/>
                </div>
                <a href={'https://freecodecamp.com/' + username} target="_blank"><h4>{username}</h4></a>
            </div>
            <div className="col-xs-3 data-cell right-border">
                <h4 className="text-center">{recent}</h4>
            </div>
            <div className="col-xs-3 data-cell">
                <h4 className="text-center">{alltime}</h4>
            </div>
        </div>
    )
}

CamperDetail.propTypes={
    user:PropTypes.shape({
        img: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        recent: PropTypes.number.isRequired,
        alltime: PropTypes.number.isRequired
    }),
    position:PropTypes.number.isRequired
};

export default CamperDetail;
