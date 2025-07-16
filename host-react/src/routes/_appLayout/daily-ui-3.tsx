import { createFileRoute } from '@tanstack/react-router';
import DailyUI3 from 'remote_react/DailyUI3';

export const Route = createFileRoute('/_appLayout/daily-ui-3')({
    component: DailyUI3RouteComponent,
});

function DailyUI3RouteComponent() {
    return (
        // `id` is just used as a marker for development.
        <div className="flex-1 flex flex-col bg-white text-black" id="daily-ui-3">
            <DailyUI3 />
        </div>
    );
}
