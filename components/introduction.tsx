import React from 'react';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image
                    src='https://media.licdn.com/dms/image/C4D03AQGy8uJqcf9rTw/profile-displayphoto-shrink_800_800/0/1662806566762?e=1699488000&v=beta&t=H6JnYGofWCrFkkx-kFaI_u8mUQKUnTV0_sFHgXIHZ4M'
                    alt="Derrick Ampire portrait"
                    width='192' height='192'
                    quality='95' priority={true}
                />
            </div>
        </div>
    </section>
  )
}
