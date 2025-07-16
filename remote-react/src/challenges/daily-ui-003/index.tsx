import '../../index.css';

import { ReactNode } from 'react';
import { Logo } from './logo';

// #ed8b00 - orange color

export default function DailyUI3(): ReactNode {
        // <div className="container mx-auto px-4">
    return (
        <div>
            <header className="py-2 shadow-sm">
                <div>
                    <Logo />
                </div>
            </header>
            <main>
                <div className="flex">
                    <div className="flex flex-col justify-center h-full">
                        <div className="my-18 mx-12 text-left flex flex-col gap-6 items-start">
                            <h1 className="font-medium text-6xl w-[15ch] tracking-tighter">
                                Greatness Starts Here. 
                            </h1>

                            <p className="text-lg font-light">At Concentra, we’re focused on improving the health of America’s workforce, one patient at a time.</p>

                            <button type="button" className="rounded-3xl font-light uppercase tracking-wide text-white bg-blue-500 px-6 py-3 text-sm">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            className="h-full object-cover"
                            src="https://www.concentra.com/-/media/project/concentra/dotcom/usa/images/hero-banner/home-page-banner.jpg?rev=d3723c8fc9214c92afdf65a54c42358a&t=20250701184817&w=+1200&hash=46F7271BD88826A3F32C27C4B7A50260"
                        />
                    </div>
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-white from-5% to-transparent"> */}
                    {/*     <div className="mx-12 flex flex-col justify-center h-full"> */}
                    {/*         <div className="text-left flex flex-col gap-6 items-start"> */}
                    {/*             <h1 className="font-medium text-6xl w-[20ch] tracking-tighter"> */}
                    {/*                 Improving the health of America’s workforce, one patient at a time.  */}
                    {/*             </h1> */}
                    {/**/}
                    {/*             <p className="text-lg font-light">At Concentra, we’re focused on improving the health of America’s workforce, one patient at a time.</p> */}
                    {/**/}
                    {/*             <button type="button" className="rounded-3xl font-light uppercase tracking-wide text-white bg-blue-500 px-6 py-3 text-sm"> */}
                    {/*                 Partner With Us */}
                    {/*             </button> */}
                    {/*         </div> */}
                    {/*     </div> */}
                    {/* </div> */}
                </div>
            </main>
        </div>
    );
}
