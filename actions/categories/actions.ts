'use server';

import { getPlayer } from '@/data/player';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

export async function getCategoriesMap() {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return response.reduce(
    (acc, category) => ({ ...acc, [category.id]: category.name }),
    {},
  );
}
