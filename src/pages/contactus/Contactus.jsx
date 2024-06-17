import Title from "../../hooks/Title";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_5lrqfr2",
        "template_xvv4erq",
        form.current,
        "WoZaV_ZGijOfT8x-7"
      )
      .then(
        (result) => {
          if (result) {
            toast.success("Thanks for contacting us!");
          }
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <Element className="" name="contact">
      <div className="mt-24">
        <Title title="Contact" subTitle="Contact now" />

        <div className="mt-14 shadow-2xl shadow-indigo-600 mb-32 w-[85%] mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="zoom-in" data-aos-duration="3000" className=" ">
              <Player
                autoplay
                speed={1.5}
                loop
                src="https://lottie.host/0dccab9a-8719-480a-9acd-5e2e5252035b/x3nFVy5sG3.json"
                style={{ height: "full", width: "full" }}
              >
                <Controls
                  buttons={[
                    "play",
                    "repeat",
                    "frame",
                    "debug",
                    "snapshot",
                    "background",
                  ]}
                />
              </Player>
            </div>

            {/* Contact Form */}
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="mt-20"
            >
              <form ref={form} onSubmit={handleSubmit(onSubmit)} action="">
                <div className="flex justify-center gap-3">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className="text-[18px] font-medium text-[#787C8B]"
                    >
                      Name <span className="text-[#F51843]">*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z\s]+$/i,
                      })}
                      className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-2 mt-1"
                    />

                    {errors.name?.type === "required" && (
                      <p className="text-red-500 mt-1">Name is required</p>
                    )}
                    {errors.name?.type === "pattern" && (
                      <p className="text-red-500 mt-1">
                        Please enter only valid text
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="email"
                      className="text-[18px] font-medium text-[#787C8B]"
                    >
                      Email <span className="text-[#F51843]">*</span>
                    </label>

                    <input
                      type="text"
                      id="email"
                      name="to_email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                      className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-2 mt-1"
                    />

                    {errors.email?.type === "required" && (
                      <p className="text-red-500 mt-1">Email is required</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="text-red-500 mt-1">
                        Please enter a valid email
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="message"
                      className="text-[18px] font-medium text-[#787C8B]"
                    >
                      Message <span className="text-[#F51843]">*</span>
                    </label>
                    <textarea
                      aria-label="message"
                      id="message"
                      cols="5"
                      rows="4"
                      {...register("message", { required: true })}
                      className="outline-none border rounded-lg border-[#69727D] focus:border-[#D8D9E5] w-full p-2 mt-1"
                    ></textarea>
                    {errors.message?.type === "required" && (
                      <p className="text-red-500 mt-1">Message is required</p>
                    )}
                  </div>
                </div>
                <button className="btn text-[17px] font-bold rounded-full bg-[#FF2E57] hover:bg-[#F51843] px-6 py-2 text-white mt-6">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contactus;
