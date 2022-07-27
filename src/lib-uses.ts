import SxInput from './lib/Input';
import SxFormItem from './lib/Form/FormItem';

import type { App } from 'vue';

const components = [
    SxInput,
    SxFormItem,
]

export default function(app:App){
    components.forEach(item=>app.component(item.name, item));
}
