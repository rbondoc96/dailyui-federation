import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <div className="flex-1 flex flex-col [view-transition-name:main-content]">
            <div className="border-b border-white px-4 py-4 text-left">
                <Link to="/" viewTransition>Back to Home</Link>
            </div>
            <div className="flex-1 flex">
                <div className="flex flex-col gap-y-2 border-r border-white w-[200px] px-4 py-4 text-left">
                    <Link className="hover:underline hover:underline-offset-4" to="/poc">Proof of Concept</Link>
                </div>
                <div className="flex-1 flex flex-col">
                    <Outlet />
                </div>
            </div>
        </div>
  );
}
