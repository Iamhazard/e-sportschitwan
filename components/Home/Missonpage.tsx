import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'

const Missonpage = () => {
    return (
        <section className="flex justify-center items-center h-screen py-6">
            <div className="relative w-[700px] h-[600px] bg-center rounded-3xl shadow-lg bg-blend-overlay hover:scale-105 transition-transform duration-300">

                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-blur-overlay"></div>
                </div>
                <div className="relative w-full h-full bg-cover rounded-3xl shadow-lg" style={{ backgroundImage: "url('/images/esan.webp')" }}></div>
                <div className="absolute inset-0 flex items-end justify-between p-4 space-x-4">
                    <div className="w-[400px] max-w-[480px] rounded-lg border-white bg-gradient-to-tr from-white to-blue-300 p-0.5 shadow-lg">
                        <div className="bg-gray-900 p-4 rounded-md">
                            <h1 className="font-bold text-lg mb-1 text-white">Mission</h1>
                            <p className="text-sm text-gray-300">Create beautiful cards with gradient borders using Tailwind CSS.</p>
                        </div>
                    </div>
                    <div className="w-[400px] max-w-[480px] rounded-lg border-white bg-gradient-to-tr from-white to-blue-300 p-0.5 shadow-lg">
                        <div className="bg-gray-900 p-4 rounded-md">
                            <h1 className="font-bold text-lg mb-1 text-white">Vision</h1>
                            <p className="text-sm text-gray-300">Create beautiful cards with gradient borders using Tailwind CSS.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-6 pb-2 ">
                    <Link className={buttonVariants()} href="/products">
                        <Button variant='btn'> Learn about E-sport{" "}</Button>
                    </Link>

                </div>
            </div>

        </section>


    )
}

export default Missonpage