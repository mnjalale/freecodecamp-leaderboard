import React from 'react';
import Main from '../components/Main';
import {getTop100CampersLast30Days,getTop100CampersAllTime} from '../utils/topCampersHelper';

class MainContainer extends React.Component{
    constructor(){
        super();
        this.state={
            users: [],
            isLoading:true,
            past30DaysListing:false,
            allTimeListing:false
        };
    }

    handlePast30Days(){
        getTop100CampersLast30Days()
            .then(function(users){
                this.setState({
                    users:users,
                    isLoading:false,
                    past30DaysListing:true,
                    allTimeListing:false
                });
            }.bind(this))
            .catch(function(error){
                console.log('Errors occurred in Main Container ' + error);
            });
    }

    handleAllTime(){
        getTop100CampersAllTime()
            .then(function(users){
                this.setState({
                    users:users,
                    isLoading:false,
                    past30DaysListing:false,
                    allTimeListing:true
                });
            }.bind(this))
            .catch(function(error){
                console.log('Errors occurred in Main Container ' + error);
            });
    }

    componentDidMount(){
        getTop100CampersLast30Days()
            .then(function(users){
                this.setState({
                    users:users,
                    isLoading:false,
                    past30DaysListing:true,
                    allTimeListing:false
                });
            }.bind(this))
            .catch(function(error){
                console.log('Errors occurred in Main Container ' + error);
            });
    }

    render(){
        return (
            <Main users={this.state.users}
                  isLoading={this.state.isLoading}
                  onPast30DaysClick={()=>this.handlePast30Days()}
                  onAllTimeClick={()=>this.handleAllTime()}
                  past30DaysListing={this.state.past30DaysListing}
                  allTimeListing={this.state.allTimeListing}/>
        )
    }
}

export default MainContainer;
