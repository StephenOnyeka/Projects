import React from 'react';
import Link from 'next/link';

const Connect = () => {
  return (
    <div className="w-full flex justify-center mt-20 md:mt-32">
      <div className="w-full">
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] leading-[0.80] font-semibold text-white tracking-tighter mb-20 md:mb-32 -ml-2">
          Let's<br />
          connect
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-8 text-[10px] md:text-[12px] tracking-[0.2em] font-medium uppercase text-white">
          {/* <div className="flex flex-wrap gap-8 tracking-normal lowercase"> */}
          <div className="flex flex-wrap gap-8 lowercase">
            <Link href="#" className="hover:opacity-60 transition-opacity">+234 9162342603</Link>
            <Link href="#" className="hover:opacity-60 transition-opacity">ejeanobionyeka@gmail.com</Link>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-12">
            <a href="https://www.linkedin.com/in/stephen-onyeka/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="https://github.com/StephenOnyeka/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GitHub</a>
            <a href="https://twitter.com/DonMizzy10" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">X (Twitter)</a>
            <a href="https://wa.me/09162342603" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">WhatsApp</a>
            <a href="mailto:ejeanobionyeka@gmail.com" className="hover:opacity-60 transition-opacity">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;



// import React from 'react';
// import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

// const socials = [
//   {
//     name: 'LinkedIn',
//     icon: <FaLinkedin size={24} />,
//     link: 'https://www.linkedin.com/in/stephen-o-572411272/',
//     color: 'hover:text-blue-600',
//   },
//   {
//     name: 'GitHub',
//     icon: <FaGithub size={24} />,
//     link: 'https://github.com/StephenOnyeka/',
//     color: 'hover:text-white',
//   },
//   {
//     name: 'X (Twitter)',
//     icon: <FaXTwitter size={24} />,
//     link: 'https://twitter.com/DonMizzy10',
//     color: 'hover:text-blue-400',
//   },
//   {
//     name: 'WhatsApp',
//     icon: <FaWhatsapp size={24} />,
//     link: 'https://wa.me/09162342603',
//     color: 'hover:text-green-500',
//   },
//   {
//     name: 'Email',
//     icon: <FaEnvelope size={24} />,
//     link: 'mailto:ejeanobionyeka@gmail.com',
//     color: 'hover:text-blue-300',
//   },
// ];

// const Connect = () => {
//   return (
//     <div className="w-full flex flex-col gap-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {socials.map((social) => (
//           <a
//             key={social.name}
//             href={social.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex items-center justify-between p-8  border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:bg-blue-400/5 rounded-2xl overflow-hidden relative"
//           >
//             <div className="flex flex-col gap-1 z-10">
//               <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-medium text-white group-hover:opacity-60 transition-opacity">
//                 {social.name}
//               </span>
//               {/* <span className={`text-white transition-colors duration-300 ${social.color} text-xl font-medium`}>
//                 Connect
//               </span> */}
//             </div>
            
//             <div className={`text-white/20 group-hover:text-blue-400 transition-all duration-500 transform group-hover:scale-110 z-10`}>
//               {social.icon}
//             </div>

//             {/* Decorative background element */}
//             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//           </a>
//         ))}
//       </div>

//       <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//         <div className="flex flex-col gap-2">
//           <h4 className="text-3xl text-white font-medium">Available for new opportunities</h4>
//           <p className="text-white/40 tracking-wider">HAVE A PROJECT IN MIND? LET'S TALK.</p>
//         </div>
        
//         <a 
//           href="mailto:ejeanobionyeka@gmail.com"
//           className="px-10 py-4 bg-blue-400 text-black font-medium tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-300 rounded-full flex items-center gap-4 group"
//         >
//           Send a Message
//           <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Connect;
