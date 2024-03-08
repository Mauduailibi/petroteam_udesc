'use server';

import { getPlayer } from '@/data/player';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

export async function getAllQuestions() {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.question.findMany({
    include: {
      category: true,
    },
  });

  return response;
}
