'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase';

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      onClick={createNewChat}
      className='relative flex items-center justify-center sm:justify-between infoText text-white
       cursor-pointer hover:bg-neutral-700
       hover:bg-gradient-to-r hover:from-purple-600/50 hover:to-fuchsia-700/90'
    >
      <PlusIcon className='w-6 h-6' />
      <p className='hidden sm:inline text-sm md:text-base'>New Chat</p>
    </div>
  );
}

export default NewChat;
