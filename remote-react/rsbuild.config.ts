import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    server: {
        port: 3001,
    },
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'remote_react',
            filename: 'remoteEntry.js',
            exposes: {
                './Counter': './src/components/Counter.tsx',
                './DailyUI3': './src/challenges/daily-ui-003/index.tsx',
            },
            shared: {
                '@tailwindcss/postcss': {
                    singleton: true,
                },
                tailwind: {
                    singleton: true,
                },
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
            }
        }),
    ],
});
