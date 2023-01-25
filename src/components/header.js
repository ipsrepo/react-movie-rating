import React from 'react';
import {Logo} from '../icons';

const Header = () => {
    return (
        <header className='w-full h-full bg-dark h-[80px] flex-center'>
            <Logo className='h-8'/>
            <h4 className='text-xl text-white'><i>Movie Rating</i></h4>
        </header>
    );

}
export default Header;
