import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [_errors, setErrors] = useState({}); 

    const [buttonText, setButtonText] = useState("Submit");

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        } else if (form.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        if (!form.subject.trim()) {
            newErrors.subject = "Subject is required";
        } else if (form.subject.length < 3) {
            newErrors.subject = "Subject must be at least 3 characters";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        } else if (form.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setButtonText("Submitting");
    };

    return (
        <div className="w-full h-fit flex flex-col bg-transparent gap-[50px]">
            <div className="w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-[50px] md:leading-[90px] gap-0 text-center lg:text-left">
                <div className="text-white">LET'S WORK</div>
                <div className="text-[rgba(182,180,189,0.2)]">TOGETHER</div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-fit gap-[20px] text-[rgb(136,136,136)]">
                <div className="flex w-full gap-[20px]">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Name</div>
                        <input
                            id="name"
                            autoComplete="name"
                            type="text"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Email</div>
                        <input
                            id="email"
                            autoComplete="email"
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Subject</div>
                        <input
                            id="subject"
                            autoComplete="subject"
                            type="text"
                            placeholder="Can We Connect"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)]"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Message</div>
                        <textarea
                            id="message"
                            autoComplete="message"
                            type="text"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full min-h-[145px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] resize-none no-scrollbar"
                        />
                    </div>
                </div>
                <button disabled={buttonText !== "Submit"} type="submit" className="w-full h-[40px] bg-[rgb(244,108,56)] rounded-[8px] text-white flex items-center justify-center text-[14px] font-semibold hover:bg-[rgb(222,98,49)] hover:cursor-pointer">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Contact