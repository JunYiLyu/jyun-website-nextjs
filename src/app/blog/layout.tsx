import React from 'react';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="h-full md:flex">
            <F1Block />
            <div className="mx-10 md:flex-[3]">
                {children}
            </div>
            <F1Block />
        </div>
    );
}

function F1Block() {
    return (
        <div className="hidden md:flex-1 md:block" />
    );
}