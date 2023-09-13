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
        <section className='bg-white max-w-[42rem] border border-blue-950 overflow-hidden sm:pr-8'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-blue-950'>{description}</p>
            <ul>
                {tags.map((tag, index) =>(
                    <li className='bg-blue-500 px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full' key={index}>{tag}</li>
                ))}
            </ul>
            <Image src={imageUrl} alt="My projects" quality={95} />
        </section>
    )
}
