"use client";

import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Blog Post 1 */}
        <Link href="/blog/homelab-setup">
          <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 cursor-pointer flex flex-col justify-between h-80">
            <h3 className="text-gray-400 text-sm">HomeLab Setup</h3>
            <h2 className="text-xl font-semibold text-white">How to Set Up a Homelab</h2>
            <p className="text-gray-400 text-sm flex-grow">
              A step-by-step guide on setting up a self-hosted network.
            </p>
          </div>
        </Link>

        {/* Blog Post 2 */}
        <Link href="/blog/cloud-vs-onprem">
          <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 cursor-pointer flex flex-col justify-between h-80">
            <h3 className="text-gray-400 text-sm">Cloud vs On-Prem</h3>
            <h2 className="text-xl font-semibold text-white">Cloud vs On-Prem: Which is Better?</h2>
            <p className="text-gray-400 text-sm flex-grow">
              Comparing cloud solutions with traditional on-prem servers.
            </p>
          </div>
        </Link>

        {/* Blog Post 3 */}
        <Link href="/blog/network-security">
          <div className="bg-gray-900 shadow-lg rounded-lg p-4 hover:scale-105 transition transform duration-300 cursor-pointer flex flex-col justify-between h-80">
            <h3 className="text-gray-400 text-sm">Network Security</h3>
            <h2 className="text-xl font-semibold text-white">Best Security Practices for Networking</h2>
            <p className="text-gray-400 text-sm flex-grow">
              How to secure your home or business network.
            </p>
          </div>
        </Link>

      </div>
    </section>
  );
}
