export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white text-center mt-16">
      <p>&copy; {new Date().getFullYear()} Taylor Jean. All rights reserved.</p>
      <p className="mt-2">
        Connect on <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
      </p>
    </footer>
  );
}
