export default {
    setWorkers: ((state, workers) => state.workers = workers),
    setFilterWorkers:((state , filterWorkers) => state.filterWorkers = filterWorkers),

    setEditedWorkerId: ((state, id) => {
        state.editedWorkerId = id
    }),

    setEditedWorker: ((state, worker) => state.editedWorker = worker),

    resetEditedWorkerId: ((state) => state.editedWorkerId = ''),

    resetEditedWorker: ((state) => {
        for (const key in state.editedWorker){
            state.editedWorker[key] = ''
        }
        delete state.editedWorker.id;
    }),

    editWorker: ((state, worker) =>{
        const index = state.workers.findIndex(p => p.id === worker.id)
        state.workers.splice(index, 1, worker);
    }),

    deleteWorker: ((state, workerId) => {
        const index = state.workers.findIndex(p => p.id === workerId)
        state.workers.splice(index, 1);
    }),

    insertWorker: ((state, worker) => {
        state.workers.push(worker)
    }),
    resetShowInputs:((state) => {
        state.show = !state.show
    }),

    setInputValue:((state ,first) => {
        state.first = first
    }),

    resetInputValue:((state) => {
        state.first = ''
    })


    }
