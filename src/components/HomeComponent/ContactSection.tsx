/** @format */

import { Mail } from "feather-icons-react";

export default function ContactSection() {
  return (
    <div className="py-24 px-6">
      <div className="text-center mb-20">
        <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] mb-4">
          GET IN TOUCH
        </p>
        <h2 className="text-3xl md:text-4xl mb-4 leading-tight">
          Let's create impact together
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div>
          <p className="text-xl text-gray-500 leading-relaxed mb-10">
            Whether you're looking for a brand designer, frontend developer, or
            collaborator — I'd love to hear from you.
          </p>

          <a
            href="mailto:vivianemma97@gmail.com"
            className="flex items-center gap-5 group">
            <div className="w-16 h-16 rounded-full bg-[#3D5AFE] flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-white" />
            </div>
            <span className="text-xl text-gray-900 group-hover:text-[#3D5AFE] transition-colors">
              vivianemma97@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
