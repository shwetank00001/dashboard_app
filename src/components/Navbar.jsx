import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';


// a button wrapped in a tool tip components
const NavButton = ({title, customFunc, icon, color, dotColor}) => {
  return(
      <TooltipComponent content={title} position='BottomCenter'>
      <button 
        type='button' 
        onClick={customFunc} 
        style={{color}} 
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span 
          style={{background: dotColor}} 
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
        >
          {icon}
        </span>
      </button>
      </TooltipComponent>)
}

function handleClick(){
  
}

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext()

  useEffect(()=> {
    const handleResize = () => {
        setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)  // when we use this, i/e add an event listener

        handleResize()

        return() => window.removeEventListener('resize', handleResize) // we use this  to remove that
    }
}, [])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((item) => !item)}  
        color="blue" 
        icon={<AiOutlineMenu />} />

        <div className='flex'>
          <NavButton 
          title="Cart" 
          customFunc={() => handleClick('cart')}  
          color="blue" 
          icon={<FiShoppingCart />} />

          <NavButton 
          title="Chat" 
          customFunc={() => handleClick('chat')}  
          color="blue" 
          dotColor="#03C9D7"
          icon={<BsChatLeft />} />

          <NavButton 
          title="Notification" 
          customFunc={() => handleClick('notification')}  
          dotColor="#03C9D7"
          color="blue" 
          icon={<RiNotification3Line />} />

          <TooltipComponent 
          content="Profile"
          position='BottomCenter'>  
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}>
              <img className='rounded-full w-8 h-8' src={avatar} />
                <p>
                  <span className='text-gray-400 text-14'>Hi,</span> {' '}
                  <span className='text-gray-400 text-14 font-bold ml-1'>Shwetank</span>
                </p>
                <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
            
          </TooltipComponent>

          { isClicked.cart && <Cart />}
          { isClicked.chat && <Chat />}
          { isClicked.notification && <Notification />}
          { isClicked.userProfile && <UserProfile />}
        </div>
    </div>
  )
}

export default Navbar