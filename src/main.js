import {createApp} from 'vue'
import App from './App.vue';
import common from './common/common';
import './styles/normalize.css';
import './styles/layout-attributes.min.css';
import './styles/styles.less';
import './styles/button.less';
import './styles/form.less';
import './styles/table.less';
import './styles/tab-panel.less';
import './styles/layer3.4/theme/default/layer.css';
import './styles/home.css';
import './assets/icomoon/icon-style.css';

createApp(App).use(common).mount('#app')
