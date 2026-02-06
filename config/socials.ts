import { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';

interface Social {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Social[] = [
    {
        name: 'Github',
        url: 'https://github.com/itsmeGl3nn',
        icon: FaGithub,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/gt.flux',
        icon: FaInstagram,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/glenn-tolentino/',
        icon: FaLinkedin,
    }   
];

export default socials;
