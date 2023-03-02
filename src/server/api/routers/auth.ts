import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getUserTypes: publicProcedure.query(async ({ ctx }) => {
    const types = await ctx.prisma.userType.findMany({});
    return types;
  }),
  register: publicProcedure
    .input(
      z.object({
        name: z.string(),
        contactInfo: z.string(),
        nickname: z.string(),
        npm: z.string(),
        registeredGameId: z.string(),
        typeId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const registered = await ctx.prisma.registration.create({
        data: input,
      });
      return registered;
    }),
  getUserType: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const type = await ctx.prisma.userType.findUnique({
        where: {
          id: input.id,
        },
      });
      return type;
    }),
});
