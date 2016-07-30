import React,{PropTypes} from 'react';
import Campers from '../components/Campers';

function Main(props){
    return(
        <div>
            <Campers  users={props.users}
                      isLoading={props.isLoading}
                      onPast30DaysClick={props.onPast30DaysClick}
                      onAllTimeClick={props.onAllTimeClick}
                      past30DaysListing={props.past30DaysListing}
                      allTimeListing={props.allTimeListing}/>/>
        </div>
    )
}

Main.propTypes = {
    users:PropTypes.array.isRequired,
    isLoading:PropTypes.bool.isRequired,
    onPast30DaysClick:PropTypes.func.isRequired,
    onAllTimeClick:PropTypes.func.isRequired,
    past30DaysListing: PropTypes.bool.isRequired,
    allTimeListing: PropTypes.bool.isRequired
};

export default Main;

