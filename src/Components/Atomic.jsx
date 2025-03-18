import React, { useState, forwardRef, useImperativeHandle } from "react";

export const Components = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { count, setCount, st, setSt },
    }));

    return <div {...st}>Count: {count}</div>;
});

const mButton = forwardRef((props, ref) => {
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { st, setSt },
    }));

    return <button {...st} />;
});

export const Button = (props) => {
    return (
        <mButton
            {...props}
            className="text-2xl font-bold text-[rgb(50,19,95)] select-none"
        />
    );
};

export const Input = forwardRef((props, ref) => {
    const [st, setSt] = useState({ ...props });
    useImperativeHandle(ref, () => ({
        s: { st, setSt },
    }));

    return <input {...st} />;
});
