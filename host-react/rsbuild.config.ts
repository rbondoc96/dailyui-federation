import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
    html: {
        title: 'DailyUI Federation',
    },
    server: {
        port: 3000,
    },
    tools: {
        rspack: {
            plugins: [
                TanStackRouterRspack({
                    autoCodeSplitting: true,
                    generatedRouteTree: './src/routeTree.gen.ts',
                    routeFileIgnorePrefix: '-',
                    routesDirectory: './src/routes',
                    target: 'react',
                    quoteStyle: 'single',
                })
            ],
        },
    },
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'host',
            remotes: {
                'remote_react': 'remote_react@http://localhost:3001/remoteEntry.js',
                'remote_vue': 'remote_vue@http://localhost:3002/remoteEntry.js',
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
