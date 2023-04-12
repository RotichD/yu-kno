interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

interface CompletionResponse {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  n: number;
  stream: string | undefined;
}

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};
