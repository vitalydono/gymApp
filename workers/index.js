import state from './workers.state';
import mutations from './workers.mutations';
import actions from './workers.actions';
import getters from './workers.getters';

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}