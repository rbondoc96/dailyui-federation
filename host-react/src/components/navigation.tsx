import * as Dialog from '@radix-ui/react-dialog';
import { Link, useLocation } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { forwardRef, PropsWithChildren, useMemo, useState } from 'react';
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
    },
    {
        label: '#3: Landing Page',
        to: '/daily-ui-3',
    },
    {
        label: '#21: Home Monitoring Dashboard',
        to: '/daily-ui-21',
    }
];

const NavigationToolbar = forwardRef<HTMLDivElement, PropsWithChildren>(({children}, ref) => {
    const location = useLocation();

    const name = useMemo(() => {
        const link = links.find((link) => link.to === location.pathname);

        if (link) {
            return link.label;
        }

        return '[ERROR] Page name could not be found.';
    }, [location.pathname])

    return (
        <div ref={ref} className="fixed bottom-0 inset-x-0 bg-pink-800 flex justify-between text-xs px-2 py-0.5">
            <div className="italic">
                <span>Viewing: </span>
                <span>{name}</span>
            </div>

            {children}
        </div>
    );
});

type BaseNavigationProps = {
    open: boolean;
    onOpenChange: (value: boolean) => void;
};

const DesktopNavigation = forwardRef<HTMLDivElement, BaseNavigationProps>(({open, onOpenChange}, ref) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <NavigationToolbar ref={ref}>
                <Dialog.Trigger className="text-white underline underline-offset-3">Open Menu</Dialog.Trigger>
            </NavigationToolbar>
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
                                onClick={() => onOpenChange(false)}
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
});

const MobileNavigation = forwardRef<HTMLDivElement, BaseNavigationProps>(({open, onOpenChange}, ref) => {
    return (
        <Drawer.Root shouldScaleBackground open={open} onOpenChange={onOpenChange}>
            <NavigationToolbar ref={ref}>
                <Drawer.Trigger className="text-white underline underline-offset-3">Open Menu</Drawer.Trigger>
            </NavigationToolbar>
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
                                onClick={() => onOpenChange(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
});

export const Navigation = forwardRef<HTMLDivElement>((_, ref) => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return <DesktopNavigation ref={ref} open={open} onOpenChange={setOpen} />;
    }

    return <MobileNavigation ref={ref} open={open} onOpenChange={setOpen} />;
});
