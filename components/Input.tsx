'use client';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { toast } from 'react-hot-toast';

type Props = {
  chatId: string;
};

function Input({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  // useSWR to retrieve model
  const model = 'text-davinci-003';

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    const notification = toast.loading('AI Assistant is thinking...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success('AI Assistant has responded!', {
        id: notification,
      });
    });
  };

  return (
    <div className='relative bg-neutral-700/75 text-neutral-300 rounded-lg text-sm md:text-base mx-8 mb-8 shadow-lg'>
      <form className='relative p-5 space-x-5 flex' onSubmit={sendMessage}>
        <input
          className=' bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
          placeholder='Type your questions and commands here...'
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className='hover:scale-125 transition duration-200 cursor-pointer text-purple-400 disabled:cursor-not-allowed disabled:scale-100 disabled:text-neutral-300'
          disabled={!prompt || !session}
        >
          <PaperAirplaneIcon className='h-5 w-5  -rotate-45 ' />
        </button>
      </form>
    </div>
  );
}

export default Input;
