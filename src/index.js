import Vue from 'vue'
import iView from 'iview';
import '@/assets/css/main.css';

import MulChooser from '@/components/mul-chooser'
import MapModal from '@/components/map-modal'
import FilterCity from '@/components/filter-city'
import CityContent from '@/components/filter-city/city-content'
import TablePlus from '@/components/table-plus'
import SelectGroup from '@/components/select-group'
import CityPlus from '@/components/city-plus'
import Swipers from '@/components/swipers'
import BasicGrid from '@/components/basic-grid'
import BasicTab from '@/components/basic-tab'
import BasicBar from '@/components/basic-bar'
import TopRank from '@/components/top-rank'
import BarTable from '@/components/bar-table'
Vue.use(iView)

const components = {
    MulChooser,
    MapModal,
    FilterCity,
    CityContent,
    TablePlus,
    SelectGroup,
    CityPlus,
    Swipers,
    SwiperPane: Swipers.SwiperPane,
    BasicGrid,
    BasicTab,
    BasicBar,
    TopRank,
    BarTable
}

const tdseed = {
    ...components
}
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(tdseed).forEach(key => {
        Vue.component(key, tdseed[key]);
    });
};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};



export default {
    install,
    MulChooser,
    MapModal,
    FilterCity,
    CityContent,
    TablePlus,
    SelectGroup,
    CityPlus,
    Swipers,
    SwiperPane: Swipers.SwiperPane,
    BasicGrid,
    BasicTab,
    BasicBar,
    TopRank,
    BarTable
};

const API = {
    install,
    ...components
};
module.exports.default = module.exports = API;
