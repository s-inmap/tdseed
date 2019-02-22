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

const components = [
    MulChooser,
    MapModal,
    FilterCity,
    CityContent,
    TablePlus,
    SelectGroup,
    CityPlus
]

const install = function(Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    ...components
}
