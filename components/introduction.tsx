'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section>
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

        <p>
            <span>Hello I&apos;m </span><span className="font-bold">Derrick Ampire</span>, a Software Engineer with a preference for <span className="font-bold">backend and cloud development </span><span>with experience in AWS & GCP, programming in Typescript, Javascript and Python and devops. I have a strong passion for teaching and mentoring.</span>
        </p>
    </section>
  )
}
