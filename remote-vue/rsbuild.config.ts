import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
    server: {
        port: 3002,
    },
    resolve: {
        alias: {
            '@': './src',
        },
    },
    plugins: [
        pluginVue(),
        pluginModuleFederation({
            name: 'remote_vue',
            filename: 'remoteEntry.js',
            exposes: {
                './Counter': './src/components/Counter',
            },
            shared: {
                '@tailwindcss/postcss': {
                    singleton: true,
                },
                tailwind: {
                    singleton: true,
                },
                vue: {
                    singleton: true,
                },
            },
        })
    ],
});
