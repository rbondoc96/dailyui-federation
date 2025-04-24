import '../../index.css';

import {createApp} from 'vue';
import Counter from './Counter.vue';
import { CounterProps } from './types';

export type {CounterProps};

export function mount(e: Element, props: CounterProps = {}) {
    const app = createApp(Counter, props);

    app.mount(e);

    return () => {
        app.unmount();
    };
}
