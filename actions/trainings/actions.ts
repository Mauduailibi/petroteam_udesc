'use server';

import { getPlayer } from '@/data/player';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

export async function getAllTrainings() {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.training.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return response;
}

export async function createTraining() {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.training.create({
    data: {
      players: {
        connect: {
          id: player.id,
        },
      },
    },
  });

  return response;
}

export async function getTrainingById(id: string) {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.training.findUnique({
    where: {
      id,
    },
    include: {
      players: true,
      buzzes: true,
    },
  });

  return response;
}

export async function deleteTraining(id: string) {
  const player = await getPlayer();

  if (!player) return redirectToSignIn();

  const response = await db.training.delete({
    where: {
      id,
    },
  });

  return response;
}
