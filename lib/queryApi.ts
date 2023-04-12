import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      n: 1,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 1,
      presence_penalty: 1,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `Yu-Kno was unable to find an answer :( (Error: ${err.message})`
    );

  return res;
};

export default query;
