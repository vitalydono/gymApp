import firebaseInstance from '../';
import database from 'firebase/database';


function getRef(options){
   return firebaseInstance.firebase.database().ref(`user/${window.user.uid}/data/${options.entity}`)
}


function getUserData(options) {
    return firebaseInstance.firebase.database().ref(`user/${window.user.uid}/data/${options.entity}`).once('value')
        .then(result => {
            //insert obj from result to array myData
            const newResults = result.val()
            const myData = [];
            for (let res in newResults) {
                newResults[res].id = res
                myData.push(newResults[res])
            }
            return myData
        });
}
//todo: to make worker genery
function create(options) {
    return firebaseInstance.firebase.database().ref(`user/${window.user.uid}/data/${options.entity}`).push(options.worker)
}
function createTrainee(options) {
    return firebaseInstance.firebase.database().ref(`user/${window.user.uid}/data/${options.entity}`).push(options.trainee)
}

function removeData(options) {
    return firebaseInstance.firebase.database()
        .ref(`user/${window.user.uid}/data/${options.entity}/${options.id}`).remove()
}

function updateData(options) {
    return firebaseInstance.firebase.database()
        .ref(`user/${window.user.uid}/data/${options.entity}/${options.id}`).update(options.worker)
}

function updateTraineeData(options) {
    return firebaseInstance.firebase.database()
        .ref(`user/${window.user.uid}/data/${options.entity}/${options.id}`).update(options.trainee)
}

function getById(options) {
   return  firebaseInstance.firebase.database()
        .ref(`user/${window.user.uid}/data/${options.entity}/${options.id}`).get().then(result=>{
            return result.val()
        })

}



export default {
    getUserData,
    create,
    createTrainee,
    removeData,
    updateData,
    updateTraineeData,
    getById,
    getRef
}