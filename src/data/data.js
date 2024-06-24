
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";
import rohitkumar from "../assets/rohitkumar.png";

import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsapp from '../assets/whatsapp.svg';
import telegram from '../assets/telegram.svg';
import instagramIcon from '../assets/instagram.svg';

import resume from '../assets/rohitkumarresume.pdf'

export const myData = {
    name:"Rohit kumar",
    image:rohitkumar,
    position: 'full stack developer',
    total_experience: 2,
    email:'solankirk2000@gmail.com',
    mobile:'8875919247',
    aboutme :"Hi, I'm Rohit Kumar, a passionate Full Stack Developer with a strong focus on frontend design. My expertise includes HTML, CSS, React, Tailwind, and Bootstrap, which I use to create visually appealing and user-friendly interfaces. Additionally, I have a solid understanding of backend technologies such as Node.js and MongoDB, enabling me to build robust and scalable web applications. With a keen eye for detail and a commitment to excellence, I strive to deliver high-quality solutions that meet the needs of both users and clients.",
    howcanihelp: "So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!",
    resume: resume,
    skills: [
        {name:'html', icon:htmlIcon},
        {name:'css', icon:cssIcon},
        {name:'bootstrap', icon:boostrapIcon},
        {name:'tailwind', icon:''},
        {name:'Javascript', icon:jsIcon},
        {name:'react.js', icon:reactIcon},
        {name:'node.js', icon:nodeIcon},
        {name:'mongoDb', icon:''},
        {name:'github', icon:''},
        {name:'typescript', icon:typescriptIcon},
    ],
    socialmedia:[
        {
            icon: linkedin,
            label: 'linkedin',
            url: 'https://www.linkedin.com/in/rohit-kumar-69b984201/'
        },
        {
            icon: whatsapp,
            label: 'whatsapp',
            url: `https://api.whatsapp.com/send/?phone=%2B918875919247&text=Hello+Rohit kumar`
        },
        {
            icon: telegram,
            label: 'telegram',
            url: `https://t.me/The_RkSolanki`
        },
        {
            icon: githubIcon,
            label: 'github',
            url: `https://github.com/webrohitsolanki`
        },
        {
            icon: instagramIcon,
            label: 'instagram',
            url: `https://www.instagram.com/rohit___solanki/`
        }
    ],
    projects:[
        {
            title: 'puneri paltan Api',
            description: "This project focuses on the analysis and visualization of data from Puneri Paltan, a prominent Kabaddi team in the Pro Kabaddi League. By leveraging advanced data processing techniques and tools, we aim to provide insights into team performance, player statistics, and match outcomes. The project utilizes a robust tech stack, including frontend design with HTML, CSS, React, Tailwind, and Bootstrap, and backend technologies such as Node.js and MongoDB, to create an intuitive and interactive platform for fans and analysts alike. Our goal is to enhance the understanding of the team's dynamics and contribute to strategic planning and decision-making.",
            projectlink:'https://github.com/webrohitsolanki/puneri-paltan-api',
            techuse: ['node.js','express.js', 'mongoDB', 'multer']
        },
        {
            title: "color change onToggle",
            description:"This project is a dynamic web application feature that allows users to change the color scheme of the interface with a simple toggle switch. Utilizing modern frontend technologies such as HTML, CSS, React, Tailwind, and Bootstrap, this project enhances user experience by providing an interactive and customizable visual theme. This functionality can be seamlessly integrated into various web applications, offering users greater control over their viewing preferences.",
            projectlink:"https://github.com/webrohitsolanki/color_change_onToggle",
            techuse: ['javascript', 'html', 'css']
        },
        {
            title: "todo app",
            description:"The ToDo App project is a simple and effective task management tool designed to help users organize their daily tasks. Developed using HTML, CSS, and JavaScript, this app provides a clean and intuitive interface for adding, editing, and deleting tasks. Its lightweight design ensures fast performance and ease of use, making it an ideal solution for users looking to keep track of their to-do lists efficiently. The ToDo App's straightforward approach focuses on enhancing productivity without unnecessary complexity.",
            projectlink:"https://github.com/webrohitsolanki/task_todo_app",
            techuse: ['javascript', 'html', 'bootstrap', 'css']
        },
        {
            title: "Services",
            description:"The Services App is a comprehensive directory application designed to provide users with contact information for essential services such as medical facilities, retail shops, hospitals, plumbers, and more. With a user-friendly interface and easy navigation, this app ensures quick access to vital contacts in times of need. Built with a focus on reliability and convenience, the Services App serves as an invaluable resource for finding important service providers in your area, streamlining the process of obtaining assistance and information",
            projectlink:"https://github.com/webrohitsolanki/services",
            techuse: ['react.js', 'css', 'tailwind css', 'material UI', 'redux']
        },
        {
            title: "bookwarms",
            description:"Bookwarms is an innovative ecommerce platform dedicated to book enthusiasts, offering a wide range of titles across various genres. Built to deliver a seamless shopping experience, the site allows users to browse, search, and purchase books effortlessly. Featuring intuitive navigation and a responsive design, Bookwarms ensures that customers can explore new releases, bestsellers, and classics with ease. With secure payment options and personalized recommendations, Bookwarms caters to avid readers looking to expand their literary horizons conveniently online.",
            projectlink:"https://github.com/webrohitsolanki/bookwarms",
            techuse: ['react.js','css', 'bootstrap', 'scss', 'react-bootstarp']
        },
    ]
}