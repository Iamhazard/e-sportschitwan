"use client"
import React, { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import { FaFacebook } from "react-icons/fa";
import data from "../../data/fb.json"
import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'

interface PostMedia {
    height: string;
    src: string;
    width: string;
}
interface FacebookAttachmentPost {
    media_type: string;
    media: { image: PostMedia };
    url: string;
    title: string;
}

interface Post {
    id: string;
    permalink_url: string;
    created_time: string;
    message: string;
    attachments: {
        data: FacebookAttachmentPost[]
    }

}
const posts = data as unknown as Post[];
const Notices: React.FC = () => {

    return (
        <div className='flex flex-col items-center space-y-4 p-6 mt-4'>
            <h1 className='text-4xl font-bold text-white font-ibm-plex-serif'>
                Stay Connected
            </h1>
            <p className='text-lg text-white text-center max-w-xl font-ibm-plex-serif '>
                Connect with us on social media for the freshest updates, exclusive behind-the-scenes content, and vibrant community interactions.
            </p>
            <div className='w-full max-w-md'>
                <Separator />
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
                {posts.map((post, inx: any) => (
                    <Link href={post.permalink_url} key={post.id} target="_blank">
                        <div className="bg-white rounded-lg shadow-md">

                            <div className="flex items-center justify-between px-4 py-3 border-b">
                                <div className='flex items-center'>

                                    <img src="/images/logo.png" alt="Profile logo" className="h-10 w-10 rounded-full mr-2 bg-contain" />
                                    <div>
                                        <h3 className="text-lg font-semibold flex items-center gap-1">ESAN <BadgeCheck className='text-sm' color='blue' /></h3>
                                        <p className="text-sm text-gray-600">Posted on {new Date(post.created_time).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <FaFacebook color='blue' />

                            </div>

                            <div className="px-4 py-2">
                                <p className="text-lg">{post.message}</p>
                                <img src={post.attachments.data?.[0]?.media?.image?.src} alt={post.attachments.data?.[0]?.title} className="mt-2 rounded-sm max-h-80 w-full object-contain" />
                            </div>
                            <div className=' flex'>
                                <h2 className="text-lg font-bold text-white font-ibm-plex-serif"> </h2>
                            </div>
                            <h2 className="text-xl font-bold mb-2 text-white"></h2>
                            <p className="text-white">{post.created_time}.</p>
                        </div>


                    </Link>



                ))}

            </div>

        </div>

    )
}

export default Notices