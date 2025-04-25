import * as Dialog from '@radix-ui/react-dialog';
import { Link } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { ReactNode, useState } from 'react';
import {Drawer} from 'vaul';
import { cn } from '@/utilities/styles';
import {useMediaQuery} from '@/hooks/use-media-query';

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
    }
];


export function Navigation(): ReactNode {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (!isDesktop) {
        return (
            <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
                <Drawer.Trigger
                    className={cn(
                        'fixed bottom-4 right-4 border z-50 border-white rounded-md px-6 py-4 text-sm',
                    )}
                >
                    <span className="font-semibold">Viewing: </span>
                    <span>Proof of Concept</span>
                </Drawer.Trigger>
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

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
                className={cn(
                    'fixed bottom-4 right-4 border z-50 border-white rounded-md px-6 py-4 text-sm',
                )}
            >
                <span className="font-semibold">Viewing: </span>
                <span>Proof of Concept</span>
            </Dialog.Trigger>
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
