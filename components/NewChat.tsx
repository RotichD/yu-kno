import { PlusIcon } from '@heroicons/react/24/outline';

function NewChat() {
  return (
    <div className='relative flex items-center justify-between infoText text-white cursor-pointer hover:bg-neutral-700'>
      <PlusIcon className='w-6 h-6' />
      <p className='text-sm md:text-base'>New Chat</p>
      {/* <div className="neonGlow" /> */}
    </div>
  );
}

export default NewChat;
