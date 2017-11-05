import Vue from 'vue';
import Vuex from 'vuex';
import Big from "big.js";

Vue.use(Vuex);

function initialState() {
    return {
        currency: new Big(0),
        totalCurrencyEarned: new Big(0),
        totalCurrencySpent: new Big(0),

        cps: new Big(0),

        clickPower: Big(1),
        clicks: new Big(0),

        upgradeCount: 0,
        achievementCount: 0,
    };
}

export default new Vuex.Store({
    state: initialState(),
    mutations: {
        resetState(state) {
            Object.assign(state, initialState());
        },

        // currency
        addCurrency(state, n) {
            state.currency = state.currency.plus(n);
            state.totalCurrencyEarned = state.totalCurrencyEarned.plus(n);
        },
        subtractCurrency(state, n) {
            state.currency = state.currency.minus(n);
            state.totalCurrencySpent = state.totalCurrencySpent.plus(n);
        },
        
        // clicks
        addClicks(state, n) {
            state.clicks = state.clicks.plus(n);
        },
        setClickPower(state, n) {
            state.clickPower = new Big(n);
        },

        setCps(state, n) {
            state.cps = new Big(n);
        },

        // upgrades/achievement tracking
        addUpgrade(state) {
            state.upgradeCount ++;
        },
        addAchievement(state) {
            state.achievementCount ++;
        },
    }
});