import SxInput from './lib/Input';
import SxFormItem from './lib/Form/FormItem';
import SxForm from './lib/Form';

import type { App } from 'vue';

const components = [
    SxInput,
    SxFormItem,
    SxForm,
]

export default function(app:App){
    components.forEach(item=>app.component(item.name, item));
}
