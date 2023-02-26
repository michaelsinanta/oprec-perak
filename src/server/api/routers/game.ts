import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
  getGames: publicProcedure.query(async ({ ctx }) => {
    const games = await ctx.prisma.game.findMany({
      include: {
        paymentInfos: true,
      },
    });
    return games;
  }),
  getGame: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const game = await ctx.prisma.game.findUnique({
        where: {
          id: input.id,
        },
        include: {
          paymentInfos: true,
        },
      });
      return game;
    }),
});
