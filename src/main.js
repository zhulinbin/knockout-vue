import Vue from 'vue'
import './assets/js/utils'
import './assets/css/normalize.scss'
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(AntDesignVue)

import ko from 'knockout'
import './pages/maxpro'
var viewModel = function() {}
ko.components.register('app-root', {
  viewModel: viewModel,
  template:
    `<maxpro></maxpro>`
})

ko.applyBindings(viewModel)
