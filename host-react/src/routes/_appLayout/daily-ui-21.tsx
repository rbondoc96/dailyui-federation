import * as Avatar from '@radix-ui/react-avatar';
import { createFileRoute } from '@tanstack/react-router';
import { Bell } from 'lucide-react';

export const Route = createFileRoute('/_appLayout/daily-ui-21')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex-1 min-h-screen bg-white text-black">
            <header className="flex justify-between items-center px-6 py-6 shadow-sm">
                <span className="text-xl font-semibold tracking-tight">Good Afternoon, Rodrigo</span>
                <div className="flex gap-x-3 items-center">
                    <div>
                        <input
                            className="border border-input rounded-md px-4 py-3 text-sm"
                            id="search"
                            name="search"
                            placeholder="Search for device"
                        />
                    </div>
                    
                    <button className="relative">
                        <div className="absolute top-0 right-0 translate-x-[5%] translate-y-[-10%] rounded-full h-2 w-2 bg-red-500 flex items-center border border-white" />
                        <Bell className="h-5 w-5" />
                    </button>

                    <div className="flex gap-x-4 items-center pl-4 border-l border-gray-300">
                        <Avatar.Root className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                            <Avatar.Image className="aspect-square h-full w-full" src="https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png" />
                            <Avatar.Fallback>RB</Avatar.Fallback>
                        </Avatar.Root>
                        <span className="text-sm">Rodrigo Bondoc</span>
                    </div>
                </div>
            </header>
            <main>

            </main>
        </div>
    );
}
