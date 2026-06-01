export default function Footer() { return ( <footer className="w-full border-t mt-10 py-6 px-4 text-sm text-gray-600"> <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"> {/* Contact Info */} <div className="text-center md:text-left text-white hover:text-gray-400"> <p>Contact: ehabtt289@gmail.com</p> <p>Phone: +972 56-911-3515</p> </div>

{/* Social Links */}
    <div className="flex gap-4">
      <a
        href="https://github.com/ehabtt289-cyber"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/ehab-shalaldah-562a583b8"
        target="_blank"
        rel="noopener noreferrer"
         className="text-white hover:text-gray-400"
      >
        LinkedIn
      </a>

      <a
        href="https://www.facebook.com/abo.naser.362460?locale=ar_AR"
        target="_blank"
        rel="noopener noreferrer"
         className="text-white hover:text-gray-400"
      >
        Facebook
      </a>
    </div>
  </div>

  <div className="text-center mt-4 text-white hover:text-gray-400">
    © {new Date().getFullYear()} All rights reserved.
  </div>
</footer>

); }
