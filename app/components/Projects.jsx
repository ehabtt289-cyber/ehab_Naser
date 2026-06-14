                                                                  "use client"
import { useState,useRef } from "react"
import { motion,AnimatePresence} from "framer-motion"
import {ExternalLink, Code2 as Github} from "lucide-react"




const ProjectCard = ({title,category,description,image,index,link,github})=>{
   const cardRef = useRef(null)
   const [rotate,setRotate] = useState({x:0,y:0});

   const handleMouseMove =(e)=>{
      if(!cardRef.current) return;
      const{left,top,width,height} = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left )/ width - 0.5;
      const y = (e.clientY - top )/ height - 0.5;
      setRotate({x:y * -20,y:x * 20})
   }

   const handleMouseLeave = ()=>{
      setRotate({x:0,y:0})
   }
   return(
      <motion.div layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.9}} transition={{duration:0.4,delay:index * 0.1}} ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
         style={{
            transformStyle:"preserve-3d",
            perspective:1000,
            rotateX:rotate.x,
            rotateY:rotate.y,
            
         }}
         className="relative group cursor-pointer"
         >

         <div className="relative overflow-hidden rounded-2xl glassmorphism aspect-4/3 border border-white/5 transition-color group-hover:border-neon-blue/40">

            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               style={{
                  backgroundImage:`url(${image})`
               }}
               >
               <div className="absolute inset-0 bg-cosmic-black/40 group-hover:bg-cosmic-black/20 transition-colors"/>
            
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8
               opacity-100 md:opacity-0 md:group-hover:opacity-100
               transition-opacity duration-300
               bg-linear-to-r from-cosmic-black via-cosmic-black/60 to-transparent">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ">
                  <span className="text-neon-blue text-xs font-bold uppercase tracking-wider">
                     {category}
                  </span>
                 <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                   {title}
                 </h3>
                 <p className="text-slate-300 text-sm mb-6 line-clamp-2">{description}</p>

                 <div className="flex gap-4">
                    <a href={link} className="p-2 bg-white/10 hover:bg-neon-blue rounded-full transition-colors text-white" target="_blank">
                        <ExternalLink size={18}/>   
                    </a>
                    <a href={github} className="p-2 bg-white/10 hover:bg-neon-blue rounded-full transition-colors text-white" target="_blank">
                      <Github size={18}/>
                    </a>
                 </div>   
              </div>
            </div>
         
         </div>
      
      </motion.div>
   )
}

const Projects = ()=>{
   const [activeTab,setActiveTab] = useState("all")

   const categories = ["all","frontend","backend","fullstack"]
   const projects =[
      {
         title:"E-commerce Platform",
         category:"backend",
         description:"A backend e-commerce platform with user authentication, product management, using Node.js and MongoDB.",
         image:'/apistore.jpg',
         github:"https://github.com/ehabtt289-cyber/backend_ecommerce",
         link:"https://backend-ecommerce-c7y3.onrender.com"
      },
        {
         title:"palestine ",
         category:"frontend",
         description:"An interactive documentary website that narrates the history, culture and personalities of Palestine in three languages cinematically",
         image:'/imgpalestien.jpg',
         github:"https://github.com/ehabtt289-cyber/backend_ecommerce",
         link:"https://preview--roots-of-palestine.lovable.app/"
      },
      {
         title:"hospatel platform",
            category:"backend",
         description:'Mange patient data,appoinments and hospatel operations efficiently',
         image:'/api2.jpg',   
         github:"https://github.com/ehabtt289-cyber/backend-Hospatel",
            link:"https://backend-hospatel.onrender.com"
      },
      {
         title:"Hospatel App",
         category:"fullstack",
         description:"fullstack hospatel app using mern stack.",                                                                                                                                                         
         image:'/hos.PNG',
         github:"https://github.com/ehabtt289-cyber/frontend-Hospatel",
            link:"https://frontend-hospatel-nky3.vercel.app/"
      },
      {
         title:"Fronted Car using React",
         category:"frontend",
         description:"AutoRent is a modern and responsive car rental frontend website built with React.js and Tailwind CSS, featuring a clean UI and smooth user experience.",
         image:'/car2.jpg',
         github:"https://github.com/ehabtt289-cyber/frontend_car_React.git",
            link:"https://carreact1.netlify.app/"
      },
      {
         title:"AI Learning Platform",
         category:"fullstack",
         description:"MERN AI Learning Platform is a full-stack educational web application that uses AI-powered tools to enhance learning through quizzes, flashcards, and document processing.Built with React Node.js, Express, and MongoDB, the platform provides secure authentication progress tracking, and intelligent study features. ",
           
      
         image:'/ai.jpg',
         github:"https://github.com/ehabtt289-cyber/MERN_AI_Learning_Platform_main.git",
            link:"https://github.com/ehabtt289-cyber/MERN_AI_Learning_Platform_main.git"
          
      },
     
      {
         title:"Ecommerce Website UI",
         category:"frontend",
         description:"Ecommerce Website UI is a modern and responsive online store frontend built with React and Tailwind CSS. The project focuses on clean design, reusable components, and an optimized shopping experience across all devices",
         image:'/ecom2.PNG      ',
         github:"https://github.com/ehabtt289-cyber/E-commerce_frontend_React.git/",
            link:"https://fronten-e-commerce.netlify.app/"
      }
   ]

   const filteredProjects = activeTab === "all" ? projects : projects.filter(project => project.category === activeTab)

   
   return(
      <section className="max-w-7xl mx-auto py-20 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className=" mb-4">
             
             <motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                className="text-3xl md:text-5xl font-bold mb-5 text-neon-blue">
                My <span className="text-gradient">Projects</span>
             </motion.h2>
             <motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{delay:0.1}}
                 className="text-slate-400 max-w-lg">
                 I build modern, scalable, and responsive web applications using powerful tools and technologies.
                
              </motion.h2>
            
          </div>

           <div className="flex bg-white/5 p-1 rounded-full border boreder-white/10 self-start md:self-auto overflow-x-auto no-scrollbar">

              {categories.map((cate)=>(
                 <button key={cate} onClick={()=> setActiveTab(cate)}
                    className={`px-4 relative py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === cate ? "text-white" : "text-slate-400 hover:text-white"}`}
                    >
                    {activeTab === cate && (
                        <motion.span layoutId="active-tab" className="absolute inset-0 bg-neon-blue rounded-full shadow-[0_0_15px_rgba(59-130-246-0.5)] "
                           transition={{type:"spring",bounce:0.2,duration:0.6}}
                           />
                     )}

                    <span className="relative z-10">{cate}</span>
                 
                 </button>
              ))}
           
           </div>

        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
               {filteredProjects.map((project,index)=>(
                  <ProjectCard key={project.title} {...project} index={index}/>
               ))}
            </AnimatePresence>
         </div>
         
      </section>
   )
}
export default Projects
