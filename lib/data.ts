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
        title: "The Forum App",
        description:
            "A boards web app built with Django (Python) framework that allows users to create, edit posts and uses Django’s authentication, ORM and forms API.",
        tags: ["Django", "Bootstrap", "Python"],
        imageUrl: theforumImg,
    },
    {
        title: "Zoe Drug Store",
        description:
            "E-commerce web app built with React and handles authentication, file storage with Firebase and is integrated with Stripe payment.",
        tags: ["React", "JavaScript", "Nodejs", "HTML", "CSS"],
        imageUrl: zoedrugstoreImg,
    },
    {
        title: "Gogool",
        description:
            "Google search clone built with React, Nodejs and the Google Search API by Rapid API to return search results, images, news and videos.",
        tags: ["React", "Nodejs", "Rapid API", "HTML", "CSS"],
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