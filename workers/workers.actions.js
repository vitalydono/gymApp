import database from "../../middleWare/firebase/database";


export default {
    getWorkers: async ({commit}) => {
        const workers = await database.getUserData({entity: 'workers'});
        commit('setWorkers', workers)
        commit('setFilterWorkers', workers)
    },

    deleteWorker: async ({state, commit}) => {
        await database.removeData({entity: 'workers', id: state.editedWorkerId});
        const workerId = state.editedWorkerId;
        commit('resetEditedWorkerId')
        commit('deleteWorker', workerId)
    },

    updateWorker: async ({state, commit}) => {
        const worker = {}

        Object.assign(worker, state.editedWorker)
        worker.id = state.editedWorkerId;

        // saves in DB
        await database.updateData({entity: 'workers', id: worker.id, worker: worker})

        //saves in store
        commit('resetEditedWorker')
        commit('resetEditedWorkerId')
        commit('editWorker', worker)
    },

    insertWorker: async ({state, commit}) => {
        const worker = {}

        Object.assign(worker, state.editedWorker)

        // saves in DB
        worker.id = (await database.create({entity: 'workers', worker})).key

        // saves in store
        commit('resetEditedWorker')
        commit('insertWorker', worker)
    },

    setEditedWorkerById: async ({state, commit}) => {
        let worker = {};
        if (state.workers.length && state.workers.find(worker => worker.id === state.editedWorkerId)) {
            worker = state.workers.find(worker => worker.id === state.editedWorkerId);
        } else {
            worker = await database.getById({entity: 'workers', id: state.editedWorkerId})
        }

        commit('setEditedWorker', worker);

    },
    hideInputs: ({commit}) => {
        commit('resetShowInputs')
    },

    //todo search from firebase and not from store
    searchWorkerByAnyField: ({ state , commit }) => {
        let filterWorker = [];
        if (state.workers.length > 0){
            if (state.first.length <= 0){
                commit('setFilterWorkers' , state.workers)
            }else{
                for (let worker of state.workers){
                    for (let key in worker){
                        if (worker[key].indexOf(state.first,0) > -1){
                            filterWorker.push(worker)
                        }
                        
                    }
                }
                commit('setFilterWorkers' , filterWorker)
            }
        }
    },

    resetWorker: ({ state , commit }) => {
        commit('resetInputValue')
        if(state.first.length <= 0){
            commit('setFilterWorkers' , state.workers)
        }

    }

}
