"use client";

export default function Experience() {
  return (
    <section id="experience" className="p-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white">Experience</h2>
      <div className="mt-6 max-w-3xl mx-auto text-gray-400 space-y-4">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white">Network Engineer - XYZ Company</h3>
          <p>Designed, implemented, and maintained network infrastructures ensuring 99.99% uptime.</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white">Cloud Engineer - ABC Inc.</h3>
          <p>Led the migration of on-prem workloads to AWS, improving scalability and reducing costs.</p>
        </div>
      </div>
    </section>
  );
}
