import Theme from 'vitepress/theme';
import ArcoVue from '@arco-design/web-vue';
import './style/var.css';
import '@arco-design/web-vue/dist/arco.css';
export default {
  ...Theme,
  enhanceApp({ app }) {
    // register global components
    app.use(ArcoVue);
  },
};
