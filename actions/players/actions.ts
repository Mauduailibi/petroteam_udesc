'use server';

import { getPlayer } from '@/data/player';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

export async function getAllPlayers() {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.player.findMany();

  return response;
}

export async function setPlayerActive(id: string) {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.player.update({
    where: { id },
    data: { isActive: true },
  });

  return response;
}
