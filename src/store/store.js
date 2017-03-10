import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isCurrentTab: '',
		cnTab: '',
		coulmn: '',
     	onResize: false,
        // 页面数据获取
     	homeData: null,
     	coulmnfxData: null,
     	coulmnyyjData: null,
     	coulmnkndData: null,
        coulmnzbData: null,
     	coulmnsjgData: null,
        // 直播页进入详情
        zhibskip:true,
        //swiper索引
        swiIndex:'0',
        //商品尺码
        goodsSize:'',
        //商品route
        apics:''

        //  mine
		,
		nologinData:null,
		loginData:null,
		regData:[],
		loggedData:null
	},
	getters: {
		getCommonState(state) {
            return state;
        }
	},
	mutations: {
		changeTab(state,hpath) {
            state.isCurrentTab = hpath;
        },
        changecnTab (state,cnpath) {
        	state.cnTab = cnpath;
        },
		changeResize(state,target) {
		    state.onResize = target;
		},
        // 分类数据获取
		homeData (state,homedata) {
        	state.homeData = homedata;
            // console.log(state.homeData)
        },
		coulmnfxData (state,coulmnfxdata) {
        	state.coulmnfxData = coulmnfxdata;
            // console.log(state.coulmnfxData)
        },
		coulmnyyjData (state,coulmnyyjdata) {
        	state.coulmnyyjData = coulmnyyjdata;
        },
        coulmnzbData (state,coulmnknddata) {
            state.coulmnzbData = coulmnknddata;
        },
		coulmnkndData (state,coulmnknddata) {
        	state.coulmnkndData = coulmnknddata;
        },
	    coulmnsjgData (state,coulmnsjgdata) {
        	state.coulmnsjgData = coulmnsjgdata;
        },
        // 直播跳转
        zhibskip (state,zhibskip) {
            state.zhibskip = zhibskip;
        },
        //swiperIndex
        swiindex (state,index) {
        	state.swiIndex = index;
        },
        goodsSize (state,index) {
        	state.goodsSize = index;
        },
        goodspic (state,index) {
        	state.apics = index;
        }

        // mine
		,
		nologinData (state,nologinData) {
			state.nologinData = nologinData;
		},
		loginData (state,loginData) {
			state.loginData = loginData;
		},
		regData (state,Datas) {
			state.regData.push(Datas);
		},
		loggedData (state,loggedData) {
			state.loggedData = loggedData;
		}
	},
	// modules: {

	// }
});

export {store}
