interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hicard App',
    description: `Built the backend for Hicard, a retail consumer membership app, using Nest.js and PostgreSQL. Shipped on June 2023`,
    imgSrc: '/static/images/hicard.png',
    href: 'https://play.google.com/store/apps/details?id=id.co.hypermart.hicard&hl=id&pli=1',
  },
  {
    title: 'Chateauxde App',
    description: `Built a fullstack e-commerce site for coffee using React.js, Nest.js, and PostgreSQL — launched in August 2022.`,
    imgSrc: '/static/images/chateauxde.png',
    href: 'https://chateauxde.com/prelaunch',
  },
]

export default projectsData
