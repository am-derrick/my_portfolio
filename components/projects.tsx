import React from 'react';
import SectionHeading from './section-heading';
import { myProjects } from '@/lib/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section>
        <SectionHeading>Personal Projects</SectionHeading>
        <div>
            {
                myProjects.map((project, index) => (
                   <React.Fragment key={index}>
                    <Project {...project} /> 
                   </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

type ProjectProps = (typeof myProjects)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return (
        <section className='bg-zinc-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]mb-3 sm:mb-8 last:mb-0'>

            <div className='pt-3 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-blue-950'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) =>(
                    <li className='bg-sky-950 px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full' key={index}>{tag}</li>
                ) )}
                </ul>
            </div>
            
            <Image src={imageUrl} alt="My projects" quality={95} className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl' />
        </section>
    )
}
