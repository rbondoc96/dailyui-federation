import { createFileRoute, Link } from '@tanstack/react-router'
import {ArrowRight} from 'lucide-react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="px-4 mx-auto flex-1 flex flex-col justify-center items-center [view-transition-name:main-content]">
            <div className="flex flex-col gap-y-6 items-center">
                <h1 className="text-5xl font-bold tracking-tight">Daily UI Federation</h1>
                <p className="text-xl font-light">
                    A collection of Daily UI challenges implemented in different frameworks through Module Federation.
                </p>
                <Link to="/poc" viewTransition={{ types: ['slide-left'] }}>
                    <button className="flex gap-x-1.5 items-center bg-purple-500 rounded-md px-6 py-2">
                        <span>Enter</span>
                        <ArrowRight className="h-4.5 w-4.5" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
