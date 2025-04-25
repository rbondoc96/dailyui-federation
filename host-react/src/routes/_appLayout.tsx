import {Navigation} from '@/components/navigation';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex-1 flex flex-col [view-transition-name:main-content]">
            <div className="relative flex-1 flex">
                <Navigation />
                <div className="flex-1 flex flex-col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
