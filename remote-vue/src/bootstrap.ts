import { createApp } from 'vue';
import Counter from './components/Counter.vue';

export function mount(e: Element) {
    const app = createApp(Counter);
    app.mount(e);

    return () => {
        app.unmount();
    }
}
