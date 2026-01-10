import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const formRef = useRef();

    const [buttonText, setButtonText] = useState("Submit");

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = [];
        if (!form.name.trim()) {
            newErrors.push("Name is required");
        } else if (form.name.length < 2) {
            newErrors.push("Name must be at least 2 characters");
        }

        if (!form.email.trim()) {
            newErrors.push("Email is required");
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            newErrors.push("Enter a valid email");
        }

        if (!form.subject.trim()) {
            newErrors.push("Subject is required");
        } else if (form.subject.length < 3) {
            newErrors.push("Subject must be at least 3 characters");
        }

        if (!form.message.trim()) {
            newErrors.push("Message is required");
        } else if (form.message.length < 10) {
            newErrors.push("Message must be at least 10 characters");
        }
        newErrors.forEach(msg => toast.error(msg));
        return newErrors.length === 0;
    };

    const sendEmail = () => {
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setButtonText("Submitted");
            toast.success("Thanks for connecting 🌟\nI'll get back to you shortly.");
        })
        .catch((error) => {
            toast.error("Failed to send message, Please try again later !!!");
            console.error(error);
            setButtonText("Submit");
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!validate()) return;
        setButtonText("Submitting");
        sendEmail();
    };

    return (
        <div className="w-full h-fit flex flex-col bg-transparent gap-[50px]">
            <div className="w-full h-fit flex flex-col text-[50px] md:text-[90px] font-bold leading-[50px] md:leading-[90px] gap-0 text-center lg:text-left">
                <div className="text-white">LET'S WORK</div>
                <div className="text-[rgba(182,180,189,0.2)]">TOGETHER</div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col w-full h-fit gap-[20px] text-[rgb(136,136,136)]">
                <div className="flex w-full gap-[20px]">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Name</div>
                        <input
                            id="name"
                            name="name"
                            autoComplete="name"
                            type="text"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            disabled={buttonText !== "Submit"}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] disabled:cursor-not-allowed"
                        />
                    </div>
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Email</div>
                        <input
                            id="email"
                            name="email"
                            autoComplete="email"
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            disabled={buttonText !== "Submit"}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Subject</div>
                        <input
                            id="subject"
                            name="subject"
                            autoComplete="subject"
                            type="text"
                            placeholder="Can We Connect"
                            value={form.subject}
                            onChange={handleChange}
                            disabled={buttonText !== "Submit"}
                            className="w-full h-[40px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full flex-1 flex flex-col gap-[10px] text-[12px]">
                        <div className="">Message</div>
                        <textarea
                            id="message"
                            name="message"
                            autoComplete="message"
                            type="text"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            disabled={buttonText !== "Submit"}
                            className="w-full min-h-[145px] text-[14px] rounded-[8px] bg-[rgba(182,180,189,0.2)] p-[12px] text-white outline-none focus:ring focus:ring-[rgb(244,108,56)] resize-none no-scrollbar disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
                <button disabled={buttonText !== "Submit"} type="submit" className="w-full h-[40px] bg-[rgb(244,108,56)] rounded-[8px] text-white flex items-center justify-center text-[14px] font-semibold hover:bg-[rgb(222,98,49)] hover:cursor-pointer disabled:cursor-not-allowed">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Contact