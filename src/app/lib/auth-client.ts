// import { env } from "@/env";
// import { createAuthClient } from "better-auth/client";

// export const authClient = createAuthClient({
//   baseURL: env.NEXT_PUBLIC_BASE_URL,
// });



import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:5000",
});