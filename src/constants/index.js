import { JU, VU, RGMSC, SKSC, BCSIR, NESCO, engineers, mtwebsolution } from "../assets/images";
import {
    car,
    css,
    estate,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    snapgram,
    summiz,
    threads,
    python,
    mysql,
    react,
    autodesk,
    figma,
    arduino,
    java,
    matlab,
    facebook,
    Jira,
    rsis,
    linux
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "JAVA",
        type: "Programming",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Backend",
    },
    {
        imageUrl: autodesk,
        name: "Autodesk",
        type: "Design",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: arduino,
        name: "Arduino",
        type: "Embedded",
    },
    {
        imageUrl: matlab,
        name: "MATLAB",
        type: "Programming",
    },
    {
        imageUrl: Jira,
        name: "Jira",
        type: "Management",
    },
    {
        imageUrl: linux,
        name: "linux",
        type: "Programming",
    },
];

export const experiences = [
  {
    title: "Software Test Engineer",
    company_name: "MTWebSolution",
    icon: mtwebsolution,
    iconBg: "#dd0d0dff", 
    date: "February 2024 – January 2025",
    points: [
      "Ensured software quality by reviewing requirements, designing and executing test plans, and identifying/reporting defects.",
      "Automated test cases using Selenium for web page testing.",
      "Used JIRA for bug tracking and reporting.",
      "Performed Functional, Performance, Security, Usability, Compatibility, Regression, and Exploratory testing on different software and web applications.",
    ],
  },
  {
    title: "Electrical & Electronics Engineer",
    company_name: "3Engineers",
    icon: engineers,
    iconBg: "#e66161ff", 
    date: "December 2022 – November 2023",
    points: [
      "Installed, configured, and integrated electrical and electronic systems.",
      "Performed coding and programming tasks for various projects.",
      "Designed and developed PCBs for custom electronic circuits.",
      "Engaged in solving diverse electrical and electronic engineering problems.",
    ],
  },
  {
    title: "Assistant Engineer (Internship)",
    company_name: "NESCO",
    icon: NESCO,
    iconBg: "#5ca9daff", 
    date: "September 2022 – November 2022",
    points: [
      "Managed, observed, and taught new GIS technology to users and technicians.",
      "Tested and ran GIS technology implementations, observing performance and usage.",
      "Trained consumers and technicians on using GIS technology effectively.",
      "Identified bugs during GIS operations and reported them to the software company.",
    ],
  },
];


export const socialLinks = [
    {
        name: 'Facebook',
        iconUrl: facebook,
        link: 'https://www.facebook.com/m.sakib8804',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sk-md-shadman-sakib/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/skmdshadmansakib',
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: '',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: '',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: '',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: '',
    }
];

export const schooling  = [
    {
        title: "Jahangirnagar University, Bangladesh",
        degree_name: "Master in Information Technology",
        icon: JU,
        iconBg: "#ffffff",
        date: "August 2024",
        url: "https://juniv.edu/"
    },
    {
        title: "Varendra University, Bangladesh",
        degree_name: "B.Sc. in Electrical & Electronics Engineering",
        icon: VU,
        iconBg: "#ffffff",
        date: "February 2022",
        url: "https://vu.edu.bd/"
    },
    {
        title: "Shahid A.H.M Kamaruzzaman Govt. Degree College, Bangladesh",
        degree_name: "Higher Secondary School Certificate",
        icon: SKSC,
        iconBg: "#ffffff",
        date: "December 2017",
        url: "https://skcr.edu.bd/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExSGhuM1lyQUkyS2REZTZEcAEekmMN4s-WjL0nruTYy21w2mBxPqcJHfKg0u-MqAGWqbDA-LfsU6vIxLZrdqU_aem_NRpE10DVvAfxcd_eB8dN3Q"
    },
    {
        title: "Rajshahi Govt Model School and College, Bangladesh",
        degree_name: "Secondary School Certificate",
        icon: RGMSC,
        iconBg: "#ffffff",
        date: "December 2015",
        url: "https://www.rmscraj.edu.bd/"
    },
    {
        title: "Rajshahi Govt Model School and College, Bangladesh",
        degree_name: "Junior School Certificate",
        icon: RGMSC,
        iconBg: "#ffffff",
        date: "December 2013",
        url: "https://www.rmscraj.edu.bd/"
    },
    {
        title: "BCSIR School and College, Bangladesh",
        degree_name: "Primary School Certificate",
        icon: BCSIR,
        iconBg: "#ffffff",
        date: "December 2010",
        url: "https://bcsirscd.edu.bd/"
    },
];

export const published  = [
    {
        title: "IR Communication-Based Alternative Horn Signaling System for Vehicles to Reduce Sound Pollution",
        date: "10 March, 2025",
        iconBg: "#ffffff",
        icon: rsis,
        link: "https://doi.org/10.51583/IJLTEMAS.2025.14020013"
    },
];