import '../index.css';

import { ReactNode, useState } from 'react';

export default function Counter(): ReactNode {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="border border-white py-1 px-2" onClick={() => setCount((count) => count + 1)}>
                Clicked {count} times.
            </button>
        </div>
    )
}
