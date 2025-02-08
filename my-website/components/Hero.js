"use client";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 lg:px-40 bg-black text-white">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <span className="bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full">
          Network & Cloud Engineer | Fitness Coach 
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Obsessed with the <span className="text-blue-400">Cloud</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Hello World! I'm Taylor Jean, and I love Networking, Programming and Fitness! If you need proof, check out my projects and videos!
        </p>
      </div>

      {/* Right Side: Embedded Video */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
      <img 
          src="/taylor-headshot.png"  // Update with your actual image filename
          alt="Taylor Jean"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-gray-700"
        />
      </div>
    </section>
  );
}
