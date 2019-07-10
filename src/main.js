import Vue from 'vue'
import {
    Button,
    Cell, CellGroup,
    Icon,
    Row, Col,
    Popup,
    Checkbox, CheckboxGroup,
    DatetimePicker,
    Field,
    Image,
} from 'vant';
import App from './App.vue'


Vue.use(Button)
    .use(Cell).use(CellGroup)
    .use(Icon)
    .use(Row).use(Col)
    .use(Popup)
    .use(Checkbox).use(CheckboxGroup)
    .use(DatetimePicker)
    .use(Field)
    .use(Image);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
