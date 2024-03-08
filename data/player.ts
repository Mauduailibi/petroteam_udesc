import { db } from '@/lib/db';
import { currentUser, redirectToSignIn } from '@clerk/nextjs';

export async function getPlayer() {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  const player = await db.player.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (player) return player;

  const newPlayer = await db.player.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      avatarUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newPlayer;
}
