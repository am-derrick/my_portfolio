import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gogoolImg from "@/public/gogool.png";
import theforumImg from "@/public/theforum.png";
import zoedrugstoreImg from "@/public/zoedrugstore.png";

export const sections = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const myExperience = [
    {
        title: "Graduated Software Engineering Course",
        company: "ALX",
        description:
            "Foundations of computer science with programming in C, Javascript & Python, and specialisation in backend engineering through a collaborative, project-based environment with real-world projects.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2022",
    },
    {
        title: "Software Engineer Technical Mentor",
        company: "Sand Technologies",
        description:
            "Facilitate coding sessions and support learners as they learn software engineering concepts.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - present",
    },
] as const;

export const myProjects = [
    {
        title: "The Forum Django App",
        description:
            "A board web app built with python and the Django framework that allows users to create, edit posts and users Django’s authentication, ORM and forms API.",
        tags: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
        imageUrl: theforumImg,
    },
    {
        title: "Zoe E-commerce Drug Store",
        description:
            "E-commerce web app built with React JS and Node JS for the frontend and backend. The application handles authentication, file storage with Firebase and is integrated with Stripe payment.",
        tags: ["React", "JavaScript", "Nodejs"],
        imageUrl: zoedrugstoreImg,
    },
    {
        title: "Gogool",
        description:
            "Google search clone built with react, nodejs for the frontend and backend and the Google Search API by Rapid API to return search results, images, news and videos.",
        tags: ["React", "Nodejs", "Rapid API"],
        imageUrl: gogoolImg,
    },
] as const;

export const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "AWS",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
    "Ruby",
    "Ruby on Rails"
] as const;