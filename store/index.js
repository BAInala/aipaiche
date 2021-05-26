import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//相当于data
	state: {
		loginStatus: false
	},
	//相当于computed
	getters: {
		reverseLoginStatus(state) {
			return state.loginStatus + 1
		}
	},
	//相当于methods
	mutations: {
		changeLoginStatus(state, playload) {
			state.loginStatus = playload.num;
		}
	},
	//可以同时执行多个mutations方法
	actions: {
		loginStatusAction(context, playload) {
			console.log(playload)
			context.commit('changeLoginStatus', {
				num: playload.number
			})
		}
	}
})