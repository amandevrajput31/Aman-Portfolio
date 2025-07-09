// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import pnLogo from './assets/company_logo/pnLogo.png';

// Education Section Logo's
import vuLogo from './assets/education_logo/vuLogo.png';
import kcsLogo from './assets/education_logo/kcsLogo.png';
import rkvnLogo from './assets/education_logo/rkvnLogo.png';

// Project Section Logo's
import elecroimg from './assets/work_logo/elecroimg.png';
import tastyfoodsimg from './assets/work_logo/tastyfoodsimg.png';
import firstfiddleimg from './assets/work_logo/firstfiddleimg.png';
import githubimg from './assets/work_logo/githubimg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
   
    {
      id: 2,
      img: pnLogo,
      role: "Frontend Intern",
      company: "Pninfosys",
      date: "July 2024 - December 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Tailwind and React. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Tailwinid",
        "React",
      ],
    },
  ];
  
  export const education = [
   
    {
      id: 1,
      img: vuLogo,
      school: "Vikrant Institute of Technology and Management ",
      date: "Sept 2020 - June 2024",
      grade: "7.38 CGPA",
      desc: "I have completed my Bachelor's degree in Computer Science and Engineering (B.Tech  cse) from Vikrant Institute of Technology and Management, Gwalior. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      img: kcsLogo,
      school: "Kiddy's Corner Higher Secondary School",
      date: "Apr 2019 - March 2020",
      grade: "63.4%",
      desc: "I have completed my class 12th education from Kiddy's Corner Higher Secondary School, Gwalior (M.P.) , under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Class 12th - PCM ",
    },
    {
      id: 3,
      img: rkvnLogo,
      school: "Rishikul Vidya Niketan",
      date: "Apr 2016 - March 2017",
      grade: "79.8%",
      desc: "I have completed my class 10th education from Rishikul Vidya Niketan, Gwalior    (M.P.), under the CBSE board.",
      degree: "Class 10th",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Electro Ecommerce webapp",
      description:
        "A modern, fully responsive ecommerce web application built with React, Vite, and Tailwind CSS. Designed for speed, clean UI, and an excellent shopping experience.",
      image: elecroimg,
      tags: ["React JS","Tailwind CSS", "API", "HTML", "JavaScript"],
      github: "https://github.com/amandevrajput31/Ecommerce-webapp",
      webapp: "https://electrro-ecommerce.netlify.app/",
    },
    {
      id: 1,
      title: "Tastyfoods - Online Food Ordering app",
      description:
        "Tasty Food is a responsive and modern food ordering web app built with React JS, Vite, Tailwind CSS, and Redux Toolkit. Users can explore delicious meals, add them to the cart, and proceed to checkout with an intuitive user interface.",
      image: tastyfoodsimg,
      tags: ["React JS","Tailwind CSS","Redux Toolkit", "HTML", "JavaScript"],
      github: "https://github.com/amandevrajput31/online-food-ordering",
      webapp: "https://tasstyfoods.netlify.app/",
    },
    {
      id: 2,
      title: "First Fiddle Clone",
      description:
        "A responsive restaurant website clone of FirstFiddle.in built using React + Vite and styled with Bootstrap CSS. This project replicates the frontend of FirstFiddle, a popular F&B brand.",
      image: firstfiddleimg,
      tags: ["React JS","Bootstrap CSS", "HTML","JavaScript"],
      github: "https://github.com/amandevrajput31/FirstFiddle-clone",
      webapp: "https://firstfidleclone.netlify.app/",
    },
    {
      id: 3,
      title: "GitHub Profile Viewer",
      description:
        "GitHub Profile Viewer is a simple and elegant web application built with React.js and Tailwind CSS that allows users to search for GitHub profiles by username or name and view detailed profile information in a clean, responsive UI.",
      image: githubimg,
      tags: ["React JS","Tailwind CSS", "API", "HTML","JavaScript"],
      github: "https://github.com/amandevrajput31/Github-profileviewer",
      webapp: "https://githubbprofileviewer.netlify.app/",
    },
 
  ];  