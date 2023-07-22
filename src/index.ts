import type { App } from 'vue';
import * as components from './components';

const componentsList = components.default;
const s1kebeatsUi = {
    install(Vue: App) {
        (Object.keys(componentsList) as unknown as Array<keyof typeof componentsList>).forEach((name) => {
            Vue.component(name, componentsList[name]);
        })
    }
}

export default s1kebeatsUi;