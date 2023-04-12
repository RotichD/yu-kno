import { adminDb } from '@/firebaseAdmin';
import admin from 'firebase-admin';
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt!' });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a valid chat ID!' });
    return;
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || 'Yu-Kno was unable to find an answer for that :(',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'Yu-Kno',
      name: 'Yu-Kno',
      avatar: 'https://ui-avatars.com/api/?name=Yu-Kno',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email!)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}
