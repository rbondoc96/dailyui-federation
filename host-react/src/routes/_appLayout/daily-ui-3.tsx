import { createFileRoute } from '@tanstack/react-router';
import DailyUI3 from 'remote_react/DailyUI3';

export const Route = createFileRoute('/_appLayout/daily-ui-3')({
    component: DailyUI3RouteComponent,
});

function DailyUI3RouteComponent() {
    return (
        <div className="flex-1 flex justify-center items-center">
            <DailyUI3 />
        </div>
    );
}
