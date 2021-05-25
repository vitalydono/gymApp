import Vue from 'vue'
import Vuex from 'vuex'
import workers from './workers'
import trainees from './trainees'

Vue.use(Vuex)


export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        workers,
        trainees
    }
})

