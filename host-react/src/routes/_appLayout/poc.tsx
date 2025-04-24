import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense, useEffect, useRef } from 'react';
import Counter from 'remote_react/Counter';
import {mount} from 'remote_vue/Counter';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

const LazyCounter = lazy(() => import('remote_react/Counter'));

export const Route = createFileRoute('/_appLayout/poc')({
    component: RouteComponent,
});

function VueComponent() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const unmount = mount(ref.current, {
            tooltip: 'Vue Counter',
        });

        return () => unmount();
    }, []);

    return (
        <div ref={ref} />
    )
}

function RouteComponent() {
    return (
        <div className="flex-1 flex justify-center items-center">
            <Tabs defaultValue="react">
                <TabsList>
                    <TabsTrigger value="react">React Counter</TabsTrigger>
                    <TabsTrigger value="react-lazy">React Counter (lazy)</TabsTrigger>
                    <TabsTrigger value="vue">Vue Counter</TabsTrigger>
                </TabsList>
                <TabsContent value="react">
                    <Counter />
                </TabsContent>
                <TabsContent value="react-lazy">
                    <Suspense fallback={<div>Loading React Counter...</div>}>
                        <LazyCounter />
                    </Suspense>
                </TabsContent>
                <TabsContent value="vue">
                    <VueComponent />
                </TabsContent>
            </Tabs>
        </div>
    );
}
