import React from 'react'
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ y: -40, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      id="contact"
      className="mt-20 flex flex-col justify-center dark:bg-darkk dark:text-white items-center gap-2"
    >
      <h3 className="text-3xl text-pink">04. What's Next?</h3>
      <p className="md:w-3/4 text-center">
        I'm open to new opportunities and would love to hear from you, I'm always
        excited to hear about new opportunities and connect with others in the
        industry. If you have any questions or just want to drop a friendly
        hello, feel free to shoot me a message. I'm eager to explore and take on exciting challenges. So please feel free to send me a
        <a
          href="https://wa.link/t89eer"
          target="_blank"
          className="text-pink mx-2 hover:text-midnight"
        >
          &lt;Message/&gt;
        </a>
        I'm ready to make the most of any opportunity that comes my way!
        {/* Greetings! While I'm content in my current position, I'm always excited to hear about new opportunities and connect with others in the industry. If you have any questions or just want to drop a friendly hello, feel free to shoot me a message. I make it a point to respond promptly and am eager to engage with like-minded individuals. So don't hesitate to reach out - my inbox is always open! */}
      </p>
      <a href="mailto:sulymankhalid333@gmail.com" target="_blank">
        <button className="border border-pink px-4 py-2 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-600 transition-all delay-75 ease-in mt-4">
          Contact me
        </button>
      </a>
    </motion.section>
  );
}

export default Contact
