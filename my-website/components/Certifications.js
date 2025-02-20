"use client";

export default function Certifications() {
  return (
    <section id="certs" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white">Certifications</h2>
      <div className="mt-6 max-w-3xl mx-auto text-gray-400 space-y-6">
        
        {/* AZ-900 Certification (Replace # with Credly link when available) */}
        <a href="https://learn.microsoft.com/en-us/users/taylorgjean/credentials/f60f1c8d6d3104ca?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-md hover:bg-gray-800 transition">
            <img src="/az-900-2.jpg" alt="AZ-900 Logo" className="w-16 h-16 mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">Microsoft Certified: Azure Fundamentals (AZ-900)</h3>
              <span>Issued: 2025</span>
              <p>Validates foundational knowledge of Azure cloud services and principles.</p>
            </div>
          </div>
        </a>

        {/* CCNA Certification (Replace # with Credly link when available) */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="block">
          <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-md hover:bg-gray-800 transition">
            <img src="/ccna.png" alt="CCNA Logo" className="w-16 h-16 mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">CCNA - Cisco Certified Network Associate</h3>
              <span>In Progress</span>
              <p>Proves skills in networking, security, and automation.</p>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
