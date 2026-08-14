import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import MagicalMineBackground from "../components/MagicalMineBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);

      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });

      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space overflow-visible mt-5 md:mt-25 py-5 md:py-20"
    >
      {/* Magical Mine - Contact background only */}
    <MagicalMineBackground />


      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="relative z-10 flex flex-col items-center justify-center max-w-md p-5 mx-auto md:mr-10 lg:mr-20 border border-white/10 rounded-2xl bg-primary/20 md:backdrop-blur-xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>

          <p className="font-normal text-neutral-400">
            Whether you need a cinematic edit, engaging social media content, or a story-driven video that leaves an impact, I'm here to bring your vision to life.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Your Good Name, Sir?
            </label>

            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="What should I call you?"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              May I Know Your Email, Please?
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Ex- frameocreate@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Let Me Hear What You Have.
            </label>

            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Don't be shy, you can tell me!!"
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;