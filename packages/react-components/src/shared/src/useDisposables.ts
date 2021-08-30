import { useEffect, useState } from "react";

// We use Function here since we copied the method from another repo and they use this.
// We rename it to DisposableFunction so we don't have to add the @typescript-eslint/ban-types every time we use this type.
// eslint-disable-next-line @typescript-eslint/ban-types
type DisposableFunction = Function;

// Took from https://github.com/tailwindlabs/headlessui/blob/develop/packages/%40headlessui-react/src/utils/disposables.ts
export function createDisposables() {
    // eslint-disable-next-line no-shadow
    const _disposables: DisposableFunction[] = [];

    const api = {
        add(callback: DisposableFunction) {
            _disposables.push(callback);
        },
        dispose() {
            _disposables.splice(0).forEach(dispose => dispose());
        },
        nextFrame(...args: Parameters<typeof requestAnimationFrame>) {
            api.requestAnimationFrame(...args);
        },
        requestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
            const id = requestAnimationFrame(...args);
            api.add(() => cancelAnimationFrame(id));
        },
        // setTimeout(...args: Parameters<typeof setTimeout>) {
        setTimeout(handler: TimerHandler, timeout?: number, ...args: any[]) {
            // const timer = setTimeout(...args);
            const timer = setTimeout(handler, timeout, ...args);
            api.add(() => clearTimeout(timer));
        }
    };

    return api;
}

export function useDisposables() {
    // Using useState instead of useRef so that we can use the initializer function.
    const [d] = useState(createDisposables);

    useEffect(() => {
        return () => {
            d.dispose();
        };
    }, [d]);

    return d;
}
