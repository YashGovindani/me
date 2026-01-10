function Contact() {
    return (
        <div className="w-full h-fit flex flex-col bg-transparent gap-[50px]">
            <div className="w-full h-fit flex flex-col text-[60px] md:text-[90px] font-bold leading-[60px] md:leading-[90px] gap-0 text-center lg:text-left">
                <div className="text-white">LET'S WORK</div>
                <div className="text-[rgba(182,180,189,0.2)]">TOGETHER</div>
            </div>
            <form className="flex flex-col w-full h-fit gap-[20px] text-[rgb(136,136,136)]">
                <div className="flex w-full gap-[20px]">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Name</div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Email</div>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Subject</div>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Can We Connect"
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Message</div>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Message"
                            className="w-full min-h-[145px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] resize-none no-scrollbar"
                        />
                    </div>
                </div>
                <button className="w-full h-[40px] bg-[rgb(244,108,56)] rounded-[8px] text-white flex items-center justify-center text-[14px] font-semibold">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact