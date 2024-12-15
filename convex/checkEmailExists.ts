import { v } from 'convex/values';
import { query } from './_generated/server';

export const checkEmailExists = query({
  args: { email: v.string() },
  handler: async ({ db }, { email }) => {
    const user = await db
      .query('users')
      .filter((q) => q.eq(q.field('email'), email))
      .first();
    return !!(user);
  },
});
