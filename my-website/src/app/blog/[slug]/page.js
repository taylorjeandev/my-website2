"use client";

import { useParams } from "next/navigation";

const blogPosts = {
  "homelab-setup": {
    title: "How to Set Up a Homelab",
    image: "/homelab-setup.jpg",
    content: `
      Setting up a homelab is essential for learning networking, virtualization, and self-hosted applications. 
      In this guide, I walk you through the process of selecting hardware, setting up virtual machines, and configuring network security.
    `,
  },
  "cloud-vs-onprem": {
    title: "Cloud vs On-Prem: Which is Better?",
    image: "/cloud-vs-onprem.jpg",
    content: `
      Cloud computing and on-prem infrastructure both have their advantages. 
      This article compares cloud services (AWS, Azure) with traditional self-hosted solutions.
    `,
  },
  "network-security": {
    title: "Best Security Practices for Networking",
    image: "/network-security.jpg",
    content: `
      Network security is a crucial skill for any IT professional. Learn how to configure firewalls, set up VPNs, and secure your home or business network.
    `,
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <h2 className="text-white text-center text-3xl p-16">Blog post not found.</h2>;
  }

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* 🔥 Added pt-24 to push content below navbar */}
      <div className="max-w-3xl w-full text-center pt-24">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <h2 className="text-lg text-gray-400 mb-6">{post.title}</h2>

        <img src={post.image} alt={post.title} className="w-full max-w-2xl mx-auto my-6 rounded-lg shadow-lg" />

        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{post.content}</p>

        <div className="mt-8">
          <a href="/#blog" className="text-blue-400 hover:text-blue-300 text-lg font-semibold flex items-center justify-center">
            ← Back to Blog
          </a>
        </div>
      </div>
    </section>
  );
}
