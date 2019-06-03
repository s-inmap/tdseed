import Vue from 'vue'
import iView from 'iview'
import '@/assets/css/main.css'

import MulChooser from '@/components/mul-chooser/index.ts'
import MapModal from '@/components/map-modal/index.ts'
import FilterCity from '@/components/filter-city/index.ts'
import CityContent from '@/components/filter-city/city-content.vue'
import TablePlus from '@/components/table-plus/index.ts'
import SelectGroup from '@/components/select-group/index.ts'
import CityPlus from '@/components/city-plus/index.ts'
import Swipers from '@/components/swipers/index.ts'
import SwiperPane from '@/components/swipers/SwiperPane.vue'
import BasicGrid from '@/components/basic-grid/index.ts'
import BasicTab from '@/components/basic-tab/index.ts'
import BasicBar from '@/components/basic-bar/index.ts'
import TopRank from '@/components/top-rank/index.ts'
import BarTable from '@/components/bar-table/index.ts'
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
  SwiperPane: SwiperPane,
  BasicGrid,
  BasicTab,
  BasicBar,
  TopRank,
  BarTable
}

const tdseed = {
  ...components
}
const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(tdseed).forEach(key => {
    Vue.component(key, tdseed[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
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
  SwiperPane: SwiperPane,
  BasicGrid,
  BasicTab,
  BasicBar,
  TopRank,
  BarTable
}

const API = {
  install,
  ...components
}
module.exports.default = module.exports = API
