import { motion } from "framer-motion";
function Footer() {
  return (
    <footer className="bg-gray-900 p-6 overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-[rgb(255,255,255)]">
          All Right reserved <i className="fas fa-copyright "></i> to MoeBdr
        </p>
      </motion.div>
    </footer>
  );
}
export default Footer;
