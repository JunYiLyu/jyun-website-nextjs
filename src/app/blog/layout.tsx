import React from 'react';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex items-stretch h-full">
            <F1Block />
            <div className="flex-[3]">
                {children}
            </div>
            <F1Block />
        </div>
    );
}

function F1Block() {
    return (
        <div className="flex-1" />
    );
}