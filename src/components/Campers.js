import React,{PropTypes} from 'react';
import CamperDetail from './CamperDetail';
import Loading from './Loading';
import classnames from 'classnames';

function Campers(props){
    let camperDetails = props.users.map(function(user,index){
        let position = index + 1;
        return(
            <CamperDetail key={user.username} user={user} position={position}/>
        )
    });

    let past30DaysListingClass = classnames({'fa fa-sort-desc': props.past30DaysListing===true});
    let allTimeListingClass = classnames({'fa fa-sort-desc': props.allTimeListing===true});

    return props.isLoading===true
            ?<Loading/>
            :<div className="container">
                <div className="header">
                    <h3 className="text-center header-text">Leaderboard</h3>
                </div>
                <div className="sub-header">
                    <div className="col-xs-1 right-border">
                        <h4>#</h4>
                    </div>
                    <div className="col-xs-5 right-border">
                        <h4>Camper Name</h4>
                    </div>
                    <div className="col-xs-3 right-border">
                        <h4 className="text-center link"><a onClick={props.onPast30DaysClick}>Points in past 30 days</a> <i className={past30DaysListingClass} aria-hidden="true"></i></h4>
                    </div>
                    <div className="col-xs-3">
                        <h4 className="text-center link"><a onClick={props.onAllTimeClick}>All time points</a> <i className={allTimeListingClass} aria-hidden="true"></i></h4>
                    </div>
                </div>
                {camperDetails}
            </div>
}

Campers.propTypes={
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPast30DaysClick: PropTypes.func.isRequired,
    onAllTimeClick: PropTypes.func.isRequired,
    past30DaysListing: PropTypes.bool.isRequired,
    allTimeListing: PropTypes.bool.isRequired
};

export default Campers;
