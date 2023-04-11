import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import TextBlock from '@/components/TextBlock';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen px-2'>
      <div className='relative'>
        <div className='neonGlow rounded-full blur-3xl z-0 animate-pulse -inset-5' />
        <h1 className='relative font-roboto text-7xl font-bold text-center z-10'>Yu-Kno</h1>
      </div>

      <p className='font-roboto text-2xl font-bold text-center z-10'>AI Assistant</p>
      <p className='text-center italic mb-20 text-sm z-10'>Powered by ChatGPT</p>

      <div className='grid grid-cols-1 md:grid-cols-3  text-center'>
        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3 relative'>
            <SunIcon className='h-8 w-8 z-10' />
            <h2 className='font-roboto text-xl z-10'>Examples</h2>
          </div>

          <div className='space-y-4'>
            <TextBlock hover text='Explain something to me in simple terms' />
            <TextBlock
              hover
              text="Got any create ideas for a 10 year old's birthday?"
            />
            <TextBlock hover text='How do I make a fetch call in javascript?' />
          </div>
        </div>

        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3'>
            <BoltIcon className='h-8 w-8' />
            <h2 className='font-roboto text-xl'>Capabilities</h2>
          </div>

          <div className='space-y-4'>
            <TextBlock text='Remembers what user said earlier in the conversation' />
            <TextBlock text='Allows user to provide follow-up corrections' />
            <TextBlock text='Trained to decline inappropriate requests' />
          </div>
        </div>

        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2 className='font-roboto text-xl'>Limitations</h2>
          </div>

          <div className='space-y-4'>
            <TextBlock text='May occasionally generate incorrect information' />
            <TextBlock text='May occasionally produce harmful instructions or biased content' />
            <TextBlock text='Limited knowledge of world and events after 2021' />
          </div>
        </div>
      </div>
    </main>
  );
}
