import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        ✧˖°. Emma's first Next.js & Tailwind Page ⋆ ˚｡⋆୨୧˚
      </h1>
      <p className="max-w-prose text-lg text-gray-700 text-center mb-6">
        Hi! My name is Emma Walker, and I'm a freshman majoring in Computer Science. Please let me into this club 🥺
      </p>
      <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-orange-400 transition">
        °❀⋆.ೃ࿔*:･
      </button>
      {/* <img src="/next.svg" alt="Next.js Logo" className="h-16 mt-6" />    */}
      <img src="upp.png" alt="" className="h-20 mt-6=" />
      </main>
  );
}
