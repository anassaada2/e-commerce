import { Avatar, Button, Dropdown, Navbar, NavbarCollapse, TextInput } from 'flowbite-react'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon ,FaSun} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
    const path = useLocation().pathname;
    const {currentUser} = useSelector((state)=>state.user)
    const {theme} = useSelector((state)=>state.theme)
    const dispatch = useDispatch()
  return (
    <Navbar className='border-b-2 bg-orange-300'>
        <Link to="/"> 
        <img className='w-12 h-12' src="https://img.freepik.com/vecteurs-libre/modele-logo-magasin-vetements-dessines-main_23-2149511674.jpg" alt="logo" />

        </Link>
        <form>
            <TextInput
            type='text'
            placeholder='Search..'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'/>
            
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
<AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
                {theme ==='dark'?<FaMoon/> : <FaSun/>}
            </Button>
           {currentUser ? (
            <Dropdown arrowIcon={false}
            inline
            label={<Avatar
            alt='user'
            img={currentUser.profilePicture}
            rounded>

            </Avatar>}
            >
<Dropdown.Header>
    <span className='block text-sm'>@{currentUser.username} </span>
    <span className='block text-sm'>{currentUser.email} </span>

</Dropdown.Header>
<Link to ={'/dashboard?tab=profile'}>
<Dropdown.Item>Profile</Dropdown.Item>
</Link>
<Dropdown.Divider/>
<Dropdown.Item >Sign out</Dropdown.Item>

            </Dropdown>
           ) : (<Link to='/signin'>
                <Button gradientDuoTone='purpleToBlue' outline >
                    sign in
                </Button>
            </Link>)}
            <Navbar.Toggle/>
        </div>
            <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
            <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/products"} as={'div'}>
            <Link to='/products'>Products</Link>
            </Navbar.Link>
        </Navbar.Collapse>
        
    </Navbar>
  )
}
