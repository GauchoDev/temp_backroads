import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  // { id: 5, href: '#featured', text: 'featured' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com/', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com/', icon: 'fab fa-twitter' },
  {
    id: 3,
    href: 'https://www.squarespace.com/',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Arccvdvds ccvvv',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Arccvdvds ccvvv',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Arccvdvds ccvvv',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'march 5th, 2024',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'april 23th, 2024',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'may 6th, 2024',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'june 2th, 2024',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'kenya',
    duration: 20,
    price: 3300,
  },
]
