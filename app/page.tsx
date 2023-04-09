import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import TextBlock from '@/components/TextBlock';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen px-2'>
      <h1 className='font-roboto text-7xl font-bold text-center'>Yu-Kno</h1>
      <p className='font-roboto text-2xl font-bold text-center'>AI Assistant</p>
      <p className='text-center italic mb-20 text-sm'>Powered by ChatGPT</p>

      <div className='grid grid-cols-1 md:grid-cols-3  text-center'>
        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3'>
            <SunIcon className='h-8 w-8' />
            <h2 className='font-roboto text-xl'>Examples</h2>
          </div>

          <div className='space-y-4'>
            <TextBlock text='Explain something to me in simple terms' />
            <TextBlock text="Got any create ideas for a 10 year old's birthday?" />
            <TextBlock text='How do I make a fetch call in javascript?' />
          </div>
        </div>

        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3'>
            <BoltIcon className='h-8 w-8' />
            <h2 className='font-roboto text-xl'>Examples</h2>
          </div>

          <div className='space-y-4'>
            <TextBlock text='Explain something to me in simple terms' />
            <TextBlock text="Got any create ideas for a 10 year old's birthday?" />
            <TextBlock text='How do I make a fetch call in javascript?' />
          </div>
        </div>

        <div className='m-2'>
          <div className='flex gap-2 items-center justify-center mb-3'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2 className='font-roboto text-xl'>Examples</h2>
          </div>

          <div className='space-y-4'>
          <TextBlock text='Explain something to me in simple terms' />
            <TextBlock text="Got any create ideas for a 10 year old's birthday?" />
            <TextBlock text='How do I make a fetch call in javascript?' />
          </div>
        </div>
      </div>
    </main>
  );
}
