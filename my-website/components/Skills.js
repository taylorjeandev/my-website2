"use client";

export default function Skills() {
  return (
    <section id="skills" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white">Skills</h2>
      <div className="mt-6 max-w-3xl mx-auto text-gray-400 grid grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/networking.jpg" alt="Networking" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-white">Networking</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/cloud.jpg" alt="Cloud Computing" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-white">Cloud Computing</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/linux.png" alt="Linux" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-white">Linux</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/security.jpg" alt="Cybersecurity" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-white">Cybersecurity</h3>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/automation.jpg" alt="Automation" className="w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-white">Automation</h3>
        </div>

      </div>
    </section>
  );
}
