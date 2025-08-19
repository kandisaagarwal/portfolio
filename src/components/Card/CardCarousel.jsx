// import React from "react"

// const cards = [
//   {
//     title: "ChatGPT 5",
//     desc: "All Rounder Explainer. Great for questions, brainstorming, and clear step-by-step explanations.",
//     icon: "🤖",
//   },
//   {
//     title: "Claude Sonnet 4",
//     desc: "Co-Writing Master. Refines emails, essays, and scripts while keeping your style.",
//     icon: "✍️",
//   },
//   {
//     title: "Gemini 2.5 Pro",
//     desc: "Long Context Master. Handles long documents and images, tracking full context and details.",
//     icon: "📚",
//   },
//   {
//     title: "Perplexity Sonar Pro",
//     desc: "Live Web Researcher. Delivers fresh answers and news from credible, real-time sources.",
//     icon: "🌐",
//   },
//   {
//     title: "DeepSeek",
//     desc: "Reasoning Specialist. Excels at logic, math, and coding with clear, detailed solutions.",
//     icon: "🧠",
//   },
//   {
//     title: "Grok 4",
//     desc: "Creative Powerhouse. Bold, unconventional ideas and punchy copy for trend-focused content.",
//     icon: "⚡",
//   },
// ];

// export default function CardCarousel() {
//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Pick the best characteristics of each AI model
//       </h2>
//       <div className="overflow-x-auto">
//         <div className="flex gap-6 px-6 pb-4 snap-x snap-mandatory">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className="min-w-[320px] flex-shrink-0 bg-gray-800 rounded-2xl p-8 flex flex-col items-center shadow-xl transition-transform duration-200 hover:scale-105 snap-center"
//             >
//               <div className="text-5xl mb-4">{card.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//               <p className="text-gray-300 text-center">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <p className="text-center text-gray-400 mt-8 text-sm">Scroll or swipe to see more</p>
//     </section>
//   );
// }

'use client'
// import Image from 'next/image';
import styles from './style.css';

const CardCarousel = ({title, description, src, url, color, i}) => {


  const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'start start']

  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])



  return (

    <div ref={container} className={styles.cardContainer}>

      <div 

        className={styles.card}

        style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}

      >

          <h2>{title}</h2>

        <div className={styles.body}>

          <div className={styles.description}>

            <p>{description}</p>

            <span>

              <a href={url} target="_blank">See more</a>

              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>

              </svg>

            </span>

          </div>


          <div className={styles.imageContainer}>

            <motion.div 

              className={styles.inner}

              style={{scale: imageScale}}

            >

              <Image

                fill

                src={`/images/${src}`}

                alt="image" 

              />

            </motion.div>

          </div>

        </div>

      </div>

    </div>
  )

}


export default CardCarousel
