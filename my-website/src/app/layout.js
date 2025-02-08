// app/layout.js
import "/styles/globals.css";
import Navbar from "/components/Navbar";

export const metadata = {
  title: "Taylor Jean | Portfolio",
  description: "IT Specialist | Networking | Content Creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20 min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
