import React from "react";

declare const __APP_VERSION__: string;

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer
            className="fixed bottom-0 right-0 w-[80px] h-[80px] bg-gradient-to-br from-gray-400 to-gray-100 text-gray-800 shadow-md flex items-end justify-end pb-1 pr-2 select-none pointer-events-none"
            style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
            }}
        >
            <span
                className="absolute top-[45px] left-[40px] text-[12px] text-gray-700"
                style={{
                    transform: 'rotate(-45deg)',
                }}
            >
                {__APP_VERSION__}
            </span>
        </footer>
    </div>
);

export default PageLayout;
