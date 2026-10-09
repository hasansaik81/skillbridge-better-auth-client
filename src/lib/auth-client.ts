import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});




// import { env } from "@/env";
// import { createAuthClient } from "better-auth/client";

// export const authClient = createAuthClient({
//   baseURL: env.NEXT_PUBLIC_BASE_URL,
// });
