"use client";

export default function Projects() {
  return (
    <section id="projects" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Configuring Cisco Networks in Packet Tracer */}
        <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 border border-yellow-400">
          <img 
            src="/packet-tracer.png"  // Ensure this image is inside `/public/`
            alt="Cisco Packet Tracer"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white mt-4">Configuring Cisco Networks in Packet Tracer</h3>
          <p className="text-gray-400 mt-2">
            Designed and configured various Cisco network topologies using Packet Tracer. Implemented VLANs, subnetting, static and dynamic routing, and network security features.
            Tested network connectivity and troubleshooting scenarios to prepare for CCNA-level networking tasks.
          </p>
        </div>

        {/* Home Lab - YouTube Video */}
        <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 border border-yellow-400">
          <iframe 
            width="100%" 
            height="200" 
            src="https://www.youtube.com/embed/YOUR_HOMELAB_VIDEO_ID" 
            title="Home Lab with VMware vSphere" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="rounded-lg">
          </iframe>
          <h3 className="text-xl font-semibold text-white mt-4">Home Lab Setup</h3>
          <p className="text-gray-400 mt-2">
            Built a self-hosted environment for networking experiments.
          </p>
        </div>

        {/* Recursive DNS Server - Image instead of Video */}
        <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 border border-yellow-400">
          <img 
            src="/pi-hole.jpg"  // Ensure this image is inside `/public/`
            alt="Pi-hole DNS Server"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white mt-4">Recursive DNS Server with Pi-hole</h3>
          <p className="text-gray-400 mt-2">
            Set up a self-hosted recursive DNS server using Pi-hole in a Docker container. Configured Pi-hole for ad-blocking, DNS filtering, and logging to enhance network security and control.
          </p>
        </div>

      </div>
    </section>
  );
}
