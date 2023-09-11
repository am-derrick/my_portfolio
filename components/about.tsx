import React from 'react';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <section className='mb-28 mt-25 max-w-[45rem] text-center leading-8 sm:mb-40 sm:mt-40'>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            I graduated from ALX with a certificate in <span className="font-bold">Computer Science and Software Development</span>. It was a collaborative and project-based course offering real-world projects with a focus on the foundations of Computer science, programming in <span className="font-bold">C, Javascript & Python</span>, and I later specialised in <span className="font-bold">backend web development</span>.
        </p>
        <p className='mb-3'>
            My core stack is <span className="font-bold">MongoDB, Express, React, Node.js</span>. I am also familiar with TypeScript and Ruby programming, alongside working with frameworks like Flask, Django and Ruby on Rails. I also enjoy working with the cloud specifically AWS; leveraging microservices, Kubernetes clusters, and serverless application technology.
        </p>
        <p className='mb-3'>
            I am currently learning <span className="font-bold">Data Science</span> and have prior experience working with Machine Learning and its different algorithms. I love reading books in my free time and mentoring people.
        </p>
    </section>
  )
}
