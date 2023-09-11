import React from 'react';
import SectionHeading from './section-heading';
import { myProjects } from '@/lib/data';

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
        <div>{title}</div>
    )
}
