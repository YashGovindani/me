function StackSvg() {
    return (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="rgb(255, 255, 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
    );
}

function ArrowSvg() {
    return (
        <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24">
            <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
        </svg>
    );
}

function LayoutSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#151312" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
    );
}

function OrangeLine1() {
    return (
        <svg viewBox="0 0 388 155" fill="none" className="w-full h-full">
            <path
                d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626"
                fill="transparent"
                strokeWidth="5"
                stroke="rgba(202,89,46,0.4)"
                strokeMiterLimit="10"
            />
        </svg>
    );
}

function OrangeLine2() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 388 155">
            <path d="M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626" fill="transparent" strokeWidth="5" stroke="rgba(202, 89, 46, 0.4)" strokeMiterlimit="10" strokeDasharray=""></path>
        </svg>
    );
}

function GreenLine() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 422 284" fill="none" className="w-full h-full">
            <path
                d="M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353"
                fill="transparent"
                strokeWidth="5"
                stroke="rgba(108,227,182,0.5)"
                strokeMiterLimit="10"
            />
        </svg>
    );
}

function ResumeAndArticleRow() {
    return (
        <div className="h-fit w-full flex gap-[30px] flex-col sm:flex-row items-center justify-center">
            <div className="relative max-w-[320px] w-full sm:w-[280px] lg:w-[300px] lg:flex-none h-[240px] overflow-hidden rounded-[10px] bg-[#F46C38]">
                <div className="absolute top-0 left-0 flex-none h-full w-full pt-[40px] pb-[22px] px-[20px] z-10">
                    <div className="flex flex-col w-full h-full gap-[24px]">
                        <div className="w-[38px] h-[41px] flex-none">
                            <StackSvg />
                        </div>
                        <div className="w-full h-full flex-1 flex flex-col justify-between">
                            <div className="text-white text-[24px] leading-[24px] h-fit w-full font-medium pt-2">Personal Project<br/>Showcase</div>
                            <div className="flex justify-end h-[32px] w-full">
                                <div className="w-[32px] h-[32px] border border-white rounded-[6px] p-[6px] text-white hover:text-[#F46C38] bg-transparent hover:bg-white hover:cursor-pointer">
                                    <ArrowSvg />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full absolute top-0 left-0 z-0 scale-125">
                    <OrangeLine1 />
                </div>
                <div className="w-full absolute bottom-0 left-0 z-0 scale-125">
                    <OrangeLine2 />
                </div>
            </div>
            <div className="relative max-w-[320px] w-full sm:w-[280px] lg:w-full lg:flex-1 h-[240px] overflow-hidden rounded-[10px] bg-[#C5FF41]">
                <div className="absolute top-0 left-0 w-full h-full flex-1 pt-[40px] pb-[22px] px-[20px] z-10">
                    <div className="flex flex-col w-full h-full gap-[24px]">
                        <div className="w-[38px] h-[41px] flex-none">
                            <LayoutSvg />
                        </div>
                        <div className="w-full h-full flex-1 flex flex-col justify-between">
                            <div className="text-black text-[24px] leading-[24px] h-fit w-full font-medium">Technical Blogs<br/>Comming Soon</div>
                            <div className="flex justify-end h-[32px] w-full">
                                <div className="w-[32px] h-[32px] border border-black rounded-[6px] p-[6px] text-black hover:text-[#C5FF41] bg-transparent hover:bg-black hover:cursor-pointer">
                                    <ArrowSvg />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full absolute -top-10 left-0 z-0 scale-125">
                    <GreenLine />
                </div>
                <div className="w-full absolute -bottom-20 -left-10 z-0 scale-125">
                    <GreenLine />
                </div>
            </div>
        </div>
    );
}
export default ResumeAndArticleRow;