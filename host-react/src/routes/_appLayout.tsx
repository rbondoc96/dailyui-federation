import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useLayoutEffect, useRef } from 'react';
import {Navigation} from '@/components/navigation';

export const Route = createFileRoute('/_appLayout')({
  component: RouteComponent,
})

function RouteComponent() {
    const navigationRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const heightOffset = navigationRef.current?.clientHeight;

        if (contentRef.current) {
            contentRef.current.style.marginBottom = `${heightOffset ?? 0}px`;
        }
    }, []);

    return (
        <div className="flex-1 flex flex-col [view-transition-name:main-content]">
            <div className="relative flex-1 flex">
                <Navigation ref={navigationRef} />

                {/* `id` is just used as a marker for development. */}
                <div ref={contentRef} className="flex-1 flex flex-col" id="challenge-container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
