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
Vue.use(iView)

// const components = [
//     MulChooser,
//     MapModal,
//     FilterCity,
//     CityContent,
//     TablePlus,
//     SelectGroup,
//     CityPlus
// ]
const components = {
    MulChooser,
    MapModal,
    FilterCity,
    CityContent,
    TablePlus,
    SelectGroup,
    CityPlus
}

const tdseed = {
    ...components
}
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(tdseed).forEach(key => {
        Vue.component(key, tdseed[key]);
    });
    // components.map(component => {
    //     console.log(32222,component)
    //     Vue.component(component.name, component);
    // });
};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
    window.Vue.use(tdseed);
};



export default {
    install,
    MulChooser,
    MapModal,
    FilterCity,
    CityContent,
    TablePlus,
    SelectGroup,
    CityPlus
};

const API = {
    install,
    ...components
};
module.exports.default = module.exports = API;
