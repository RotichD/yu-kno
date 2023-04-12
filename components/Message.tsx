import { DocumentData } from 'firebase/firestore';

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isYuKno = message.user.name === 'Yu-Kno';

  return (
    <div className={`my-4 text-white`}>
      <div
        className={`flex space-x-5 px-10 py-5 max-w-2xl mx-auto ${
          isYuKno
            ? 'bg-neutral-800 rounded-b-2xl rounded-tr-2xl'
            : 'rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-purple-700 to-fuchsia-700'
        }`}
      >
        <img src={message.user.avatar} alt='' className='h-8 w-8' />
        <p className='pt-1 text-sm md:text-base'>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
