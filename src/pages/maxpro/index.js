import hello from '../../components/hello'
import Vue from 'vue'
import { apiConfig } from '@/configs/api/apiConfig'
import httpService from '@/assets/js/utils/httpService'
import ko from 'knockout'
import './index.scss'
const template = require('./index.html')

const viewModel = function() {
  this.data = 'knockout data'
  httpService.get(apiConfig.server.getNormalCode).then().catch()
  new Vue({
    render: h => h(hello)
  }).$mount('#app')
}

ko.components.register('maxpro', {
  viewModel: viewModel,
  template: template
})
