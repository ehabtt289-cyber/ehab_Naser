"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2 ,Github,Linkedin,Facebook} from "lucide-react"
import emailjs from "@emailjs/browser"


function Contact(){

   const formRef = useRef()
   const [isSubmitting,setIsSubmitting] = useState(false)
   const [isSuccess,setIsSuccess] = useState(false)

   const handleSubmit = (e)=>{
      e.preventDefault()
      setIsSubmitting(true)

      emailjs.sendForm(
         "service_jns4ltd",
         "template_0smayq2",
         formRef.current,
         "7gvBaSgAiPgcd7Ukh"
      )
      .then(()=>{
         setIsSubmitting(false)
         setIsSuccess(true)
         formRef.current.reset()
         setTimeout(()=>setIsSuccess(false),4000)
      })
      .catch(()=>{
         setIsSubmitting(false)
         alert("Something went wrong ❌")
      })
   }

   return(
      <section className="max-w-7xl mx-auto px-6 py-20" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center space-y-10">

            <motion.div
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{duration:0.6}}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h2 className="text-3xl text-neon-blue md:text-5xl font-bold mb-6">
                <span className="text-gradient">Let's Connect</span>
              </h2>

              <p className="text-lg text-slate-400 max-w-md">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neon-blue rounded-xl py-3 font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18}/>}
            </button>

            {isSuccess && (
              <div className="text-green-400 text-center flex items-center justify-center gap-2">
                <CheckCircle2 size={20}/>
                Message sent successfully ✅
              </div>
            )}

          </motion.form>
        </div>



      </section>
   )
}

export default Contact                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          