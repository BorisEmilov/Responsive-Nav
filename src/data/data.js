import { AiOutlineHome } from 'react-icons/ai'
import { FaReact, FaAngular, FaJava } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'



const navButtons = [
    {
        index: 1,
        title: 'Home',
        icon: <AiOutlineHome size={25} color='white' />
    },
    {
        index: 2,
        title: 'React',
        icon: <FaReact size={25} color='white' />
    },
    {
        index: 3,
        title: 'Angular',
        icon: <FaAngular size={25} color='white' />
    },
    {
        index: 4,
        title: 'Javascript',
        icon: <DiJavascript1 size={25} color='white' />
    },
    {
        index: 5,
        title: 'Java',
        icon: <FaJava size={25} color='white' />
    },
]


export { navButtons }