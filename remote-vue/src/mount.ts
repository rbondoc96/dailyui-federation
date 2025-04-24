import './index.css';

import {createApp} from 'vue';

import Counter from './components/Counter.vue';

export default function mount(e: HTMLElement) {
    createApp(Counter).mount(e);
}
