# Daily UI Federation

A collection of Daily UI challenges implemented in different frameworks through Module Federation.

## Tech Stack

* Build Tool: rspack
* Host Application: React
* Remote Applications: React, Vue 3

## Setup

1. Start host server: `pnpm @host:dev`
2. Start remote React server: `pnpm @remote-react:dev`
3. Start remote Vue server: `pnpm @remote-vue:dev`

### Adding New Components

When a new component is added to one of the remote frontends, it will need to be exposed via its `rsbuild.config.ts` file:

```ts
// React case
exposes: {
    './Counter': './src/components/Counter.tsx',
    './DailyUI3': './src/challenges/DailyUI3.tsx',
},

// Vue case
exposes: {
    './Counter': './src/components/Counter',
},
```

Additionally, the host development server will need to be restarted. This is necessary so that the host application can
recompile the TypeScript definitions for the new component.
