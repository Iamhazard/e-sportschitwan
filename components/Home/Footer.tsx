import React from 'react'
import { Card } from '../ui/card'
import MaxWidthWrapper from './MaxwidthWrapper'
import { Separator } from '../ui/separator'

const Footer = () => {
    return (
        <MaxWidthWrapper>
            <section className='flex items-center justify-center'>
                <Card className="w-full shadow-lg bodrder-[2px] border-gray-800  bg-gray-800 rounded-lg ">
                    <div className='flex items-center w-full max-w-full'>
                        <div className='flex-1 border-t border-white'></div>
                        <div className='mx-4 text-center'>
                            <span className='text-sky-200 font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-700'>
                                E-SPORT ASSOCIATION CHITWAN
                            </span>
                        </div>
                        <div className='flex-1 border-t border-white'>

                        </div>

                    </div>
                    <div className='flex items-center justify-center py-2'>
                        <h1 className="text-wrap font-bold text-white ">
                            We are ESAN District committee doing and Online Gamming in Chitwan District
                        </h1>
                    </div>


                </Card>
            </section>
        </MaxWidthWrapper>

    )
}

export default Footer