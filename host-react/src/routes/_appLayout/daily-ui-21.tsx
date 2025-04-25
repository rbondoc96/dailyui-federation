import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/daily-ui-21')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_appLayout/daily-ui-21"!</div>
}
