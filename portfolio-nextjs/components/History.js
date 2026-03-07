import React from 'react'

function History() {
    const experience= [
        {
            year: "Now",
            title: "Frontend Software Engineer",
            company: "Cuoral",
            link: "https://cuoral.com/"
        },
        {
            year: "2025",
            title: "Frontend Software Developer",
            company: "OurPropertyNG",
            link: "https://ourproperty.ng/"
        },
        {
            year: "2024",
            title: "Frontend Software Engineer",
            company: "SFCollab",
            link: "https://sfcollab.com/"
        },
        {
            year: "2024",
            title: "Frontend Software Engineer",
            company: "CanadianNewsHub",
            link: "https://canadiannewshub.ca/"
        },
        {
            year: "2023",
            title: "Frontend Software Developer",
            company: "Innobyte Services",
            link: "https://www.innobyteservices.com/"
        },
        {
            year: "2022",
            title: "Frontend Engineer (Internship)",
            company: "Innobyte Services",
            link: "https://www.innobyteservices.com/"
        },
    ]
  return (
    <div className="relative w-full overflow-hidden rounded-3xl group">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-contain md:object-cover grayscale brightness-90 contrast-125"
            >
                <source src="/vids/downloaded-file (1).mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
        </div>

        <div className='relative z-10 flex flex-col px-6 md:px-12 py-8'>
            {experience.map((item) => (
                <div key={item.year} className='flex md:flex-row md:justify-between items-start md:items-center gap-4 border-b-[0.2px] border-white/20 py-8 hover:bg-white/5 transition-all duration-300 px-4 -mx-4 rounded-xl'>
                    <div className='flex flex-col'>
                        <p className='text-2xl md:text-4xl  pb-1'>{item.title}</p>
                        <a href={item.link} target='_blank' rel="noopener noreferrer" className='text-base md:text-xl font-light underline opacity-70 hover:opacity-100 transition-opacity'>{item.company} </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden md:block text-white/30">{`--->`}</span>
                        <p className='text-xl md:text-2xl font-medium'>{item.year}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default History