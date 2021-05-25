export default {
    isWorkerGreaterThenX: state => x =>
        state.workers.filter(worker => worker.startWorking < x),
}