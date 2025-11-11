export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-semibold">Nexusflow Media</div>
          <p className="mt-2 text-slate-400 text-sm">Website as a Service for Nigerian businesses.</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 text-slate-400 text-sm space-y-1">
            <li>Email: hello@nexusflowmedia.com</li>
            <li>WhatsApp: <a className="text-blue-400" href="https://wa.me/2348012345678" target="_blank">Chat on WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <ul className="mt-2 text-slate-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 text-slate-400 text-sm space-y-1">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Nexusflow Media. All rights reserved.</div>
    </footer>
  )
}
