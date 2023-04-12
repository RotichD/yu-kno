'use client';
import { useSession, signOut } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';

import NewChat from './NewChat';
import Chat from './Chat';
import ModelSelection from './ModelSelection';

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className='flex h-screen flex-col bg-neutral-800 p-2'>
      <div className='flex-1'>
        <div>
          <NewChat />
          <div className='hidden sm:inline'>
            <ModelSelection />
          </div>
          {loading && (
            <div className='animate-pusle text-center text-white'>
              <p>Loading Chats...</p>
            </div>
          )}
          {chats?.docs.map((chat) => (
            <Chat key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className='flex flex-col sm:flex-row items-center justify-between p-2 text-white'>
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
            <p className='hidden sm:inline'>Logout</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SideBar;
