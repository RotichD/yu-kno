'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels);
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  return (
    <div className=' '>
      <Select
        className='mt-2'
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) => 'bg-neutral-200 border-neutral-700',
        }}
        options={models?.modelOptions}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
