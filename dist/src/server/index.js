import { initTRPC } from '@trpc/server';
// import type { Endpoints } from '../interface.js';
import { z } from 'zod';
const t = initTRPC.create();
export const appRouter = t.router({
    ping: t.procedure
        .input(z.string())
        .query(async () => "")
});
// export type AppRouter = typeof appRouter;
//# sourceMappingURL=index.js.map