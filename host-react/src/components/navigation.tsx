import * as Dialog from '@radix-ui/react-dialog';
import { Link } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import {Drawer} from 'vaul';
import { cn } from '@/utilities/styles';
import {useMediaQuery} from '@/hooks/use-media-query';

function NavigationToolbar({ children }: PropsWithChildren): ReactNode {
    return (
        <div className="fixed bottom-0 inset-x-0 bg-pink-800 flex justify-between text-xs px-2 py-0.5">
            <div className="italic">
                <span>Viewing: </span>
                <span>Proof of Concept</span>
            </div>

            {children}
        </div>
    );
}

type NavigationLink = {
    label: string;
    to: string;
};

const links: NavigationLink[] = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Proof of Concept',
        to: '/poc',
    },
    {
        label: '#21: Home Monitoring Dashboard',
        to: '/daily-ui-21',
    }
];


export function Navigation(): ReactNode {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return (
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <div className="fixed bottom-0 inset-x-0 bg-pink-800 flex justify-between text-xs px-2 py-0.5">
                    <div className="italic">
                        <span>Viewing: </span>
                        <span>Proof of Concept</span>
                    </div>

                    <Dialog.Trigger className="text-white underline underline-offset-3">Open Menu</Dialog.Trigger>
                </div>
                <Dialog.Portal>
                    <Dialog.Overlay
                        className="fixed inset-0 z-50 bg-black/80"
                    />
                    <Dialog.Content
                        className={cn(
                            'fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50',
                            'border shadow-lg rounded-md',
                            'bg-slate-900',
                            'p-6',
                            'w-full max-w-lg sm:max-w-md',
                            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
                            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
                        )}
                    >
                        <div className="flex flex-col gap-y-1.5 px-4 py-2 text-center sm:text-left">
                            <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">Navigation Menu</Dialog.Title>
                        </div>

                        <nav className="flex flex-col gap-y-4 px-4 py-2 text-left">
                            {links.map((link, index) => (
                                <Link
                                    className="bg-purple-600 rounded-me px-4 py-2 rounded-md"
                                    key={index}
                                    to={link.to}
                                    viewTransition
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <Dialog.Close
                            className="absolute top-4 right-4 rounded-md opacity-70"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }

    return (
        <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
            <div className="fixed bottom-0 inset-x-0 bg-pink-800 flex justify-between text-xs px-2 py-0.5">
                <div className="italic">
                    <span>Viewing: </span>
                    <span>Proof of Concept</span>
                </div>

                <Drawer.Trigger className="text-white underline underline-offset-3">Open Menu</Drawer.Trigger>
            </div>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
                <Drawer.Content
                    className="fixed inset-x-0 bottom-0 z-50 mt-24 pb-4 flex flex-col h-auto rounded-t-[10px] border bg-slate-900"
                >
                    <div className="mx-auto mt-4 h-1 w-[100px] rounded-full bg-muted" />
                    <div className="flex flex-col gap-y-1.5 p-4 text-center sm:text-left">
                        <Drawer.Title className="text-lg font-semibold leading-none tracking-tight">Navigation Menu</Drawer.Title>
                    </div>

                    <nav className="flex flex-col gap-y-4 px-4 py-2 text-left">
                        {links.map((link, index) => (
                            <Link
                                className="bg-purple-600 rounded-me px-4 py-2 rounded-md"
                                key={index}
                                to={link.to}
                                viewTransition
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
