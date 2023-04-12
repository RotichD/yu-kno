import ChatScreen from '@/components/ChatScreen';
import Input from '@/components/Input';

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  console.log('PASSING ID', id);
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <ChatScreen chatId={id} />
      <Input chatId={id} />
    </div>
  );
}

export default ChatPage;
