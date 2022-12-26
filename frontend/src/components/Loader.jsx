import React, { useState } from "react";

export default function Loader() {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center justify-center">
                <svg className="animate-spin" width={177} height={177} viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M177 88.5C177 137.377 137.377 177 88.5 177C39.6228 177 0 137.377 0 88.5C0 39.6228 39.6228 0 88.5 0C137.377 0 177 39.6228 177 88.5ZM14.6651 88.5C14.6651 129.278 47.7221 162.335 88.5 162.335C129.278 162.335 162.335 129.278 162.335 88.5C162.335 47.7221 129.278 14.6651 88.5 14.6651C47.7221 14.6651 14.6651 47.7221 14.6651 88.5Z" fill="#DBEAFE" />
                    <path d="M0 88.5C0 111.972 9.32408 134.482 25.9211 151.079C42.518 167.676 65.0283 177 88.5 177C111.972 177 134.482 167.676 151.079 151.079C167.676 134.482 177 111.972 177 88.5L162.335 88.5C162.335 108.082 154.556 126.862 140.709 140.709C126.862 154.556 108.082 162.335 88.5 162.335C68.9178 162.335 50.1376 154.556 36.2908 140.709C22.4441 126.862 14.6651 108.082 14.6651 88.5H0Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1={177} y1="167.5" x2="-46.5" y2="72.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1D4ED8" />
                            <stop offset={1} stopColor="#60A5FA" />
                        </linearGradient>
                    </defs>
                </svg>
                <p className="mt-10 text-gray-800 text-2xl font-bold text-left leading-6">Loading ...</p>
            </div>
        </div>
    );
}
