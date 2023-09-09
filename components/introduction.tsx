'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutgoingMail } from 'react-icons/md';
import { BsDownload, BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';


export default function Introduction() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Image
                    src='https://media.licdn.com/dms/image/C4D03AQGy8uJqcf9rTw/profile-displayphoto-shrink_800_800/0/1662806566762?e=1699488000&v=beta&t=H6JnYGofWCrFkkx-kFaI_u8mUQKUnTV0_sFHgXIHZ4M'
                    alt="Derrick Ampire portrait"
                    width='192' height='192'
                    quality='95' priority={true}
                    className='h-30 w-30 rounded-full'
                />
            </motion.div>
        </div>

        <motion.p className='mb-10 mt-8 px-4 text-lg font-normal leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span>Hello I&apos;m </span><span className="font-bold">Derrick Ampire</span>, a Software Engineer with a preference for <span className="font-bold">backend and cloud development </span><span>with experience in AWS & GCP, programming in Typescript, Javascript and Python and devops. I have a strong passion for teaching and mentoring.</span>
        </motion.p> 

        <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <Link href='#contact' className='bg-blue-950 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'>
                Contact Me <MdOutgoingMail />
            </Link>
            <a className='bg-white text-blue-950 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'>
                Download Resume <BsDownload />
            </a>
            <a className='bg-white text-blue-950 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'>
                <BsLinkedin />
            </a>
            <a className='bg-white text-blue-950 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'>
                <BsGithub />
            </a>
            <a className='bg-white text-blue-950 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105'>
                <BsMedium />
            </a>
        </motion.div>
    </section>
  )
}
