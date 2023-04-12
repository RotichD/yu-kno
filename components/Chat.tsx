import Link from 'next/link';
import {
  ChatBubbleLeftEllipsisIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const deleteChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatComponent text-white ${active && 'bg-neutral-900/50'}`}
    >
      <ChatBubbleLeftEllipsisIcon className='h-5 w-5' />
      <p className='hidden sm:inline flex-1 ml-2 truncate'>
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
      </p>
      <TrashIcon
        className='h-5 w-5 text-neutral-500 hover:text-red-300'
        onClick={deleteChat}
      />
    </Link>
  );
}

export default ChatRow;
