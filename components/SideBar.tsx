'use client';
import { useSession, signOut } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

import NewChat from './NewChat';

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className='flex h-screen flex-col bg-neutral-800 p-2'>
      <div className='flex-1'>
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* model selection */}</div>
          {/* map through rows*/}
        </div>
      </div>
      {session && (
        <div className='flex items-center justify-between p-2 text-white'>
          <img
            className='h-12 w-12 rounded-full'
            src={session.user?.image!}
            alt='Profile Picture'
          />
          <button
            type='button'
            className='flex items-center space-x-2 rounded-lg bg-gradient-to-r from-purple-600/20
        to-fuchsia-700/50 px-5 py-2  text-lg
        hover:from-purple-600/50 hover:to-fuchsia-700/90'
            onClick={() => signOut()}
          >
            <ArrowLeftOnRectangleIcon className='h-6 w-6' />
            <p>Logout</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
