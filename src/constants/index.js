import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,


} from "../assets";
import next from '../assets/next.webp'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    icon: web,
  },
  {
    title: "Front-End Specialist (React & Next.js)",
    icon: mobile,
  },
  {
    title: "API Design & Backend Integration",
    icon: backend,
  },
  {
    title: "Next.js Developer",
    icon:creator, 
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Technical Team Member ",
    company_name: "Google Developer Groups",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjcChZaOkj8-qohDS-Gixb8e3eFcPPLjwP-LBTYWbQH00WyDu", // Add an icon for Internpe if available
    iconBg: "#E6DEDD",
    date:"Nov 2024",
    points: [
      "Assisted in developing web applications using React.js and Tailwind CSS.",
      "Collaborated with the team to implement user-centered designs and features.",
      "Tested and debugged components to ensure cross-browser compatibility.",
    ],
    website: "https://gdgipsa.vercel.app/",
  },
  // {
  //   title: "FreeLance",
  //   company_name: "EaseLearn Project",
  //   icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABsFBMVEX///////3//v////sLVbT///n8//////jwciX//v3/xzL//f/9/v8Mbuv6///9//0AW+sAYeoOVKzj8fusyveItvBCh/EAYu8AY+nX6f76//v///PQ4Pvj7vtxovCMs/QAZeYAUrcASbFfl/EAXO8Ma+MAY+AQU6RIcLk9b8Gcv/d1qvgAafMAbOvxeCbxgif1jSn3nCr5ry/u9PoAT7tLkPH8yCf/6sEAX+LE1egJWLQ0bsjD1vj+8uT32sX7w5j2tofwrHb8tn/22rj2wJzrmF/tgCz4eQbyfxv0iRv3kRL3pkH1xYX56tQjffXwoG/ynC32skzyqIHubA34nxr1uWT768sweuH0qCxqmdnvZRv9sR72vkUKaNTuaAH4zqz3uin2lVj8zWD2ynP42oOqyuoMYdCFpNL4zUz15df5xaT956hZi8tMd7X6zjb53YP/+N3vgkxCl+d0lM4AP6CHqM7khljdcTbdl3ZlhrzTcjzJcEW3fWXneEe7dE6lb2K8n5yba2qhlJvUz9mOb3hzZoF0eJ+Fkbi7hmmgcGqPb3d9cIZbbqfp4dyzk42joLRN0s+6AAAQJ0lEQVR4nO2ci3fbxpWHZzAcQGOAM6QIEgT4Al+STBLOOjRlU6acR52sN03obOQNnYfkpDWpOLHTNF41bZK126ZNu0m8+y/vHQCURb3snMim9pz5fORzRHBw5od75947DwghhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFIpfAtP2fwA/+hPaYAY/8E32uIn84FRieqBm/cpLL7/yyiuvvvrSr9YNzk0irOPaaJquC0K4O660y+VyO2u7nBLB6GnUCA9+/eprr//rtWv/JnnjjfO/fvMtnZvmcZ21WMEgg/LQ7zgdie8Hw3KRGOK5dftnoN+5vrFx7dzrL7zwLyHn3377jRv/fpHq5JhGzOB20g+CZLOZBIKgEzSblzbtU6YQc02g9Xc2Ns4B116IJJ6XvH3+xn+8yxnyDm2nU0HsYToAgcnwvyQIBaXN4NJogDVPoNNiS0q5fmUBAIEvxAJjhTfP37j5JrXooe081K37neQszYhL73lYMxl7zlIORxecv/z+oQrP37x588UPfls4PNpgd+gEh8mTTJpuwdBOgUJIEEKw61vnFmKJ166FoQYCTSzwxRc/+HD9kJYMFX3pnqG0wI8JYn1Lm5NJkVinIaRiU4h3thZ2Bb5+/aVbV6786tarv75x43wo8MUPPvpwXaezduTMKHaC2IJBvlmvDAbFol3pNZeaIK45Aaog8dhc81wwCUdXI4HnFjY2Pr4FSRD8FiQYb71584ZU+BHwG4PPOpxAbqyv2eyM7IxgjGHCGO22NkONk8nmJFGCfDInYbtYhN/aWIh8dOu1Kx5nhAkTQgTROV//7QeRwI9Wb+/PGcU4fELsHBuIEYN4HjS0EOX25lIocTI5y+c/EC1vPTbgwsZVqiOd6RZmFliRmYyjdz/6ACSeOXNm9SIXZNpdz2RuPACTfr2LCJRuumlqSDANRh7LnF2SJpxMLmwjMm8jWuidDalwY+H9T70DaY+hLz4MBZ5Z/aRg4mncMKk7zX9LZX7gnrrO35tMEpNqtVrLzD/W3ImjzManyNwX+uDpM/7FJ2dChaufmWJqQ6M07HTCIZgv44N+CHUpvzupriUSieo9dFxJ9Fx47X05CM9tXeXC2+dRmiaT5e1Q4eerv6OeGX6MIcgkO1C5JJt+GYmDkw+d6lhcnkiFaxf681SoCQ/d2Ygs+DE76G0wpkx+e3VqQ2rKzkIoAgsGMs6Aix4ZSEjpQkJSvTtXGzLBo1G4sHVHP1hCah5Ht1c/ihR+/oUWFm9ECgwTfTNf9w4v55CsBLerUuHihcyzVPAEdMaN30cmvM4PedSmzqTA0Iir78rnIRt1c2GUaTaX6uLoySMj3dCGi7XxM1TwRAS/s2tCsm88aZrJTemiq1Li5xd1SwidCORJFw0F9gTRzKNuzQS6HxoxcZdY85thYH4rjKTvf3XQ24gnLRiaT2ZDncslDka9XCcqZCa9gwN3DyYV/UjhZc8S+5dHnhskHoZb7xxykbPpGASBiBekuYQUGMjqemnUPdYypqDd5VBhLcPmZ0PCP57mwgOYEGTOxHH0Ijcjf/R6MorKqcNlTo7vN7fQvdCItf4TvvkssfQo0Gy9Nfs5garUi9NEaEEpjwrmfRlbcHK2+xS3jwZibUzF/KpT/fVDFSJD0/YI1D3ZQ4t4dahkpAU3z3afJstth2VNbbw/iD1H8BEKTa5FUTSyoG5IPSYIDGfxUFCP2VPU02w7tiGz5hVpmI5iL70ze0HjF2EMrkZRlHumxmDGAQIDWchMNjdhbGGNPdEyoHBNKoTE+6wkPAHMURRptq7su6L97nGa0OUgtAxSd2SmB4Fra8uL/9kHmz7p/ncjhX2E5zXBwB66HmWLq7MXdPSb3TEYpQkDt51guCtweXGxT46s2KasJGKFaF42hDLs5Why+Id9V/Q410OaiBfo206c6CfVxOIyKKz2n3T7DAgEhdWuZs1LoUb4la1zcvL0+jqdqTs88skqcDF8+B5jVtkJ17Sbm5vZ6iIoBBb7lNMjuy5MNK6BxOriCqdzC6aaMNfD9YuFrVv63k4Iahqf3f7sC4tI+3kEV5xATgfBhEWyXZVOuricAIlHVysWx2HCr164j/DcFjIYN/lrUVHze2NGIjY8mCpx3ZCG1Xil02yGexNLA8TJNuhbTCwvJhbdo72PkX5NzoBhGDI0t5UMppv802gRY+vTvZN1jHQNwg1UagImE6ySlhNeuR1RJBoh6H5tUQYbsKJbsLyDuQ7acY+shNlwbRkK9DnWNFCLnYvmTwt3uDjM5SAnZPPxkv3SABK9zhj6U205tOPisosP2XzTCIzfnVpYd1/YefYajkePl4MX/kA07RCJgthpuSSTTPq+Db9bApsGjyQmlqvLGXJwimhBhdCvhiVbotad92IbpZENv1r4o6kdMuOjY0fOJkBhfkwMuSVKuMVAYmhDCDol40AbgVlpLRa4jY6dRj4H4pH41Vdff/1HikzLmz5yzaM6FdJFw4XRID1Gu2nNovxPMAzX1tZAZZ9gS9N2V+8tC6pQsKBcwahWl2Eoz0HVXnTKr2+ckwK/+ebbRxBZpoHDMk1BumUn2AwXLaTAx40glNyrLkqFa4nFHcugj/ftqYW8nVq0ClWt9Y15mxB6pK//lzThNw8ePHj450e7n3sG47acK0kbBukW0jRtqtE0Geb3pA0T4Ky1FVne7Er0+mdribVoer8Ds8ojl3KeE9Icd6TAbx58+/DhX37463cwt5WVcrdY2cxLfTJP5FuYeY9DvmnpgnXvycJ6LVFNVKsrO65UyBB3d87W5OcwDKu1u4JYZG5rNHvQr3wtTfjtw//+y99+/Pv33/9je/v+3cuTZjM+ftB0KojtmxFC1dNdqSWipRgQU0us3L1/dyVRi5IE2Hatdk/X5zf33Qv2+JWpCf/244/f//TTytnLl0dTgckgXylQbV+2JCY2vXuxHClouQokqtMPqhdqdy06732nKRrRH/3zwUMw4Q+hDX9aAYmjzVBgIPMgozon+3ZIBfE0b7u2KwnKuHCjYvprbcc4XQeHzD9PTShtOFUIgcbpHbksTxAaLIeZfVdXZL9qorbWP3CGbL5wgR79zw+xCWOFm/L8wcg+zg6Q+7dhgrQ4IzCxVlvbsagx7yA6i2lCan701z0KL282l/I52zumbDY1pjHU3blcqz521sSF2tkdj+hcnCIPlehhJDG/+185DM+CwMnlL1slRgg9+qChpmGhEUx4cVsGUeBCLXFvx5UTLkrM0+WlMVJMt/Rdv993S4g+/c4fZjzTl3Q9GWafXQd/MYJgLAiVcVPo/OmTmaXLKkGeMxXMmN+U/imQB3ygdPY8wkztZ3gZg0kjtINKhwkdz33nXqFQKBQKheL/JUZply77GZMakintaXlwQ7SQyRxcDp4LxUtOTKOHf0bhr/cavuP7TT/vpPObB+twPkqVTrCbv4BiPlmOaWHy9PtAzG5XKpVcZ9iutNuVg/W00bs0z4OHeyj6ZVn9SyjzfsasjzLE6LiRNSgy2MF2/PQozNf3dI/BzLY0KLoUI841zpiXKRZL8XYuMUipX3QJE5aAaxqyiJ3KMjk3ZswkSH4VHpNlylHJcuk9CjmjuFQsugYxdWFxhj236JYMmDKawtPBdSghlHKDCkQ8+B6aWWQ+SYWY2kHKSaXyFatg6dTL5huNVCNoy3NchAyG6VSqkcxSeA6yUaRQRicujHFSfjU3oCzcjphVWBD2KN1wUkGrULBEoVR2Gk6jMbTheXiF8tBzy0M/aRjFS4NMvZFKp5q2x09q12ZWoSinRm17UBmlcxnKCfyWtQeteiMrr1XSQXlsV0aNMifhkeBIoewJ6faczbZtl5ONLDcPKuTtS357LO9blielm069NbDbzTT4uIW/DMr5fK5XN8igM0o2y3arHDTgMZ6UQr8epwjpFeNGrssMjHndyRZEKUiWCIw3w+0yzLJOrsQIM7r1fJ+Eu7u7NtSMdrqXYZhgd5RvFdCMQpja42wqV5Jn/rq9NBi552R1ZBDDTfquoRv1ZD5XtHSG8WCpM3KxQeigmXZPajWgGAwrEQP5W7tIPI8Kw/V7jBbT9YIn5EKbKYxSs9mlGGNhFBsVbOp7FbJieigNR3ih5AcZc0YhxrQUNDOGEITjYiNLcKXNmfA8blQcmwhU90eZQhjkBn6nSE2hUVRxsiem0O84+Xzed1IV2S9kUIJhyHWdHqJu0BlwRKlhcKvQarQKBCJugWZTkFf4rkIZZcqXbJnfmU6g1y0yoxAuZx2bglJWMLINGwlwBBl9ScFu2ODk9XTLMHXpFIN8Dxkm0Sh1nd6JRZqgV3KBkiujiU66gxbYM9te6mmEtPKpUbliu+C2Rt0vt0LK+WaGULGrEEGPRkFJnmTTiIkGThnPKMQWLvswuCT1dFI6s+HaWek2vbyNBas7LhPhOv8gXZYvVgmNlTq5ExK4G2miV8q1VtBIy00Xv5PDFiVuttd0Up1el9B60LiUAtKpkSsXQXcVYiJAYTdUCGHUdepsRqGgrO476bBtY1SE4ditOyl/OGwmO3kbnLznu/E77IN8GYWvPaJSkHs22cJujPqcAJl8jlimfBmbdse5IMdpO9/KSEpdNI1ycSyFf718uAsqhGnYTgXNKMSMlPN2xoW24CeQTfVcugwPCRlGNmWDu/YCN75hpBA9Q4XgMEWsmaZJMz4oZDqHQGMZfLNTIuNGOVzsZIROt9+nCglqpdtSoW4yGFWDWYXMouP8e4XwnRpqQGWYCUakgOWNW+lQof9sFfp1CnFaAsGgnu5TpjGK3vN7sufEJFDJ0GbgUm/kjxH0i+HMtEDXse1kIfcTjQedPngXmH/s5MKTUCSXhhSDZTGoE28IssF4lHY5ZRl/RORZ90Jm5NsQgPYodNpThf6JKXSDnhsDVVSrUedQsLj1RicnSKY80EFAt5zPcYKLvtOyGPHGnexUoWGnKzTUazt+ixvYq3SW3DDO4pw/iO/rUVZsLLW6BvVafgUTL5dvUUK9cdLp2BBV60FxV+HUhu7JKSw2OqmYwGNer+HkekEq1x8OOXGdS1BrDNPpYYaaOimOnE4u5+eH02JFp3YjmlYQBDk6PZRfhRwubSiG0/s2xgY3isOGnxsupUcuGLIYOM1eznHa4KWGKQdxdD/cb+x6aX50Uvmwm61k45RvC+Z5rXquVxl41IaakZbgt2GuPAaf4oLgrl3P5eo2L0RNoVZxs0UheyIKqGv3hqO67TEe7tB79vS2lRLTBYG2w1zP5oZmwX0rvVy95RpWpSQ4HmSnry+UKoNYV7din9QW4+yT0uQrrVBnRcdD5N8E4BaPjsOECYvxvXtHkApR/HcDZEMUXrSiT/Der8kfjOBOKDziHgalqCU0w49PYOI9fwZlji/TKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoTjd/B/oMkBjD1bzEgAAAABJRU5ErkJggg==', // Placeholder icon, replace with actual icon if available
  //   iconBg: "#E0C3FC",
  //   date: "March 2024 - April 2024",
  //   points: [
  //     "Developed a fully responsive eLearning website using React.js, Node.js, and MongoDB.",
  //     "Implemented interactive features like user registration, course enrollment, and progress tracking.",
  //     "Collaborated with the client to ensure alignment with project goals and user needs.",
  //     "Designed and built dynamic components to provide a seamless learning experience.",
  //     "Ensured smooth functionality across different devices and browsers.",
  //   ],
  //   "website": "https://ease-learn.vercel.app/",
  // },
  {
    title: "Full Stack Developer Intern",
    company_name: "Astraeus Next Gen",
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQF9BfxReZlBwg/company-logo_100_100/company-logo_100_100/0/1724170026929?e=1745452800&v=beta&t=EnEqB7SDIHfjXrWuTxOWjhMK3xAA2T7QGqvcKYoRb74', // Placeholder icon, replace with actual icon if available
    iconBg: "#E0C3FC",
    date: "January 2025 - April 2025",
    points: [
      "Collaborated with the development team to design, develop, and maintain web applications using modern frameworks and technologies.",
      "Worked on both front-end and back-end development with expertise in technologies like React.js, Angular, Node.js, Python, and Django.",
      "Ensured code quality by writing efficient, reusable, and scalable code while participating in debugging and troubleshooting technical issues.",
      "Developed innovative solutions for creating secure and scalable e-commerce platforms using data analytics and visualization techniques.",
      "Assisted in creating automated workflows and ERP solutions for maritime trade, port operations, and logistics.",
    ],
    "website": "https://astraeus-project-theme2.vercel.app/",
  },
  {
    "title": "Frontend Developer",
    "company_name": "WebExcep",
    "icon": "data:image/jpeg;base64,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", // Replace with WebExcep's actual logo URL
    "iconBg": "#E0C3FC",
    "date": "Jan 2024 - Present",
    "points": [
      "Developed and deployed responsive, high-performance web applications for various clients, optimizing UI/UX experiences.",
      "Built and integrated scalable APIs and microservices, ensuring seamless communication between front-end and back-end systems.",
      "Led the development of e-commerce and business platforms using React.js, Next.js, Node.js, and MongoDB.",
      "Implemented advanced animations and interactive features using Framer Motion to enhance user engagement.",
      "Collaborated with UI/UX designers to transform wireframes into fully functional web applications.",
      "Optimized website performance, reducing load times and improving SEO rankings for client projects."
    ],
    "website": "https://www.trendsupmedia.com/" // Replace with the actual website URL you created
  }


];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ochi",
    description:
      "Frontend project built to demonstrate proficiency in React.js, featuring dynamic components and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: "https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg", // Replace with actual image
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/Ochi", // Replace with actual link
  },
  {
    name: "Rejoice",
    description:
      "A frontend project showcasing the use of HTML, CSS, and JavaScript to create a responsive and visually appealing user interface.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: 'https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format', // Replace with actual image
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/rejoice", // Replace with actual link
  },
  {
    name: "Sundown Studio",
    description:
      "A personal project for a website featuring elegant design and responsive layout, built using modern frontend technologies.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg', // Replace with actual image
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/Sundown-Studio", // Replace with actual link
  },
  
  {
    name: "Blinkit Clone",
    description:
      "Mobile clone of the Blinkit app, replicating UI and core functionalities, with smooth navigation, responsive design, and product browsing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: 'data:image/png;base64,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', // Replace with actual image
    source_code_link: "https://github.com/fardeenkhan748/blinkit-clone", // Replace with actual link
  },
  {
    name: "F-Mart",
    description:
      "A full e-commerce app, including product categories, cart system, and seamless checkout with a responsive, user-friendly interface.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: 'data:image/jpeg;base64,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', // Replace with actual image
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/F-Mart---An-E-Commerce-Shopping-App", // Replace with actual link
  },
  {
    name: "Anonymous Chat and Video Calling App",
    description:
      "A video calling and chatting app clone with random connection features for video and text chats, focusing on real-time communication and user anonymity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: 'data:image/png;base64,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', // Replace with actual image
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/OmegleCloneByFardeen", // Replace with actual link
  },
  {
    name: "eLearning Website",
    description:
      "A fully responsive eLearning platform built using ReactJS, Node.js, and MongoDB. Includes user registration, course enrollment, progress tracking, and a seamless learning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://t3.ftcdn.net/jpg/05/07/66/58/240_F_507665856_dFXIKJJ4SwROG0df8GNPBhqsZV44p6jn.jpg', // Replace with the actual image link
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/eLearning-Website", // Replace with the actual repository link
  },
{
    name: "Notes Making",
    description:
      "A web-based application that allows users to create, edit, and delete notes. Built using ReactJS, featuring persistent storage using localStorage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localStorage",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: 'data:image/png;base64,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', // Add image link here
    source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/NotesApp", // Replace with actual link
},
{
  name: "Spotify Clone",
  description:
    "Recreated UI of Spotify  platform with smooth navigation, focusing on user experience and responsive design.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: 'data:image/png;base64,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', // Replace with actual image
  source_code_link: "https://github.com/Fardeennnnnnnnnnkhan/Spotify", // Replace with actual link
},

// {
//     name: "Password Generator",
//     description:
//       "A tool to generate secure and random passwords with customizable length and characters. Built using JavaScript, HTML, and CSS.",
//     tags: [
//       {
//         name: "javascript",
//         color: "yellow-text-gradient",
//       },
//       {
//         name: "html",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "css",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: '', // Add image link here
//     source_code_link: "https://github.com/fardeenkhan748/password-generator", // Replace with actual link
// },

// {
//     name: "QR Code Generator",
//     description:
//       "A simple web application that generates QR codes from user-provided text or URLs. Developed using JavaScript and a QR code library.",
//     tags: [
//       {
//         name: "javascript",
//         color: "yellow-text-gradient",
//       },
//       {
//         name: "html",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "css",
//         color: "blue-text-gradient",
//       },
//     ],
//     image: '', // Add image link here
//     source_code_link: "https://github.com/fardeenkhan748/qr-generator", // Replace with actual link
// },

  // {
  //   name: "RayBan Cover Page Animated",
  //   description:
  //     "An animated cover page for RayBan showcasing smooth transitions and high-quality visuals, demonstrating expertise in CSS animations.",
  //   tags: [
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: 'data:image/png;base64,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', // Replace with actual image
  //   source_code_link: "https://github.com/fardeenkhan748/rayban-cover", // Replace with actual link
  // },
];

export { services, technologies, experiences, testimonials, projects };
