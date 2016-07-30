import axios from 'axios';

export function getTop100CampersLast30Days(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function(result){
            return result.data;
        })
        .catch(function(error){
            console.log('Errors occurred in Top Campers Helper ' + error);
        });
}

export function getTop100CampersAllTime(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(function(result){
            return result.data;
        })
        .catch(function(error){
            console.log('Errors occurred in Top Campers Helper ' + error);
        });
}
