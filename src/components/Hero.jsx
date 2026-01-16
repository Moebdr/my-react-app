import React from "react";
import { motion } from "framer-motion";

const SERVICE_DATA = [
  {
    id: 1,
    title: "Breath",
    icon: "fab fa-airbnb",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur amet vitae.",
  },
  {
    id: 2,
    title: "Wind",
    icon: "fas fa-wind",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur amet vitae.",
  },
  {
    id: 3,
    title: "Hold",
    icon: "fas fa-lungs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro enim nam sint.",
  },
  {
    id: 4,
    title: "Listen",
    icon: "fas fa-mosquito",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur amet vitae.",
  },
  {
    id: 5,
    title: "Speak",
    icon: "fab fa-speaker-deck",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro enim nam sint.",
  },
];

function Services() {
  return (
    <section className="bg-gray-950 py-12 px-6">
      <motion.h2 className="text-center text-[rgb(255,255,255)] 
      text-3xl text-bold py-4 mb-6
       shadow shadow-[0_0_10px_rgba(255,255,255,.5)]"
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:.5,ease:'easeInOut',delay:.2}}
       viewport={{once:true}}

       >
        Our Missions
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid Logic:
            - grid-cols-1: Mobile (1 column)
            - md:grid-cols-2: Tablet (2 columns)
            - lg:grid-cols-3: Desktop (3 columns)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_DATA.map((service) => (
            <motion.div
              key={service.id}
              className="shadow-[0_0_10px_rgba(255,255,255,0.2)] text-white p-6 bg-gray-900 rounded-lg transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              // 2. State when it is scrolled into view
              whileInView={{ opacity: 1, scale: 1 }}
              // 3. How the transition should feel
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.5 * service.id,
              }}
              // 4. Settings for the trigger
              viewport={{ once: true, amount: 0 }}
            >
              <h2 className="text-center font-bold p-4 text-2xl flex flex-col items-center gap-2">
                <i className={`${service.icon} text-blue-400`}></i>
                {service.title}
              </h2>
              <p className="text-gray-300 text-center leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return <Services />;
}
