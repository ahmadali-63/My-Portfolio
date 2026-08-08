import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isNgrokEnabled = process.env.VITE_NGROK === "true";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-plugin-ngrok",
      apply: "serve",
      async configureServer(server) {
        if (!isNgrokEnabled) return;

        try {
          const { connect, kill } = await import("ngrok");
          const port = server.config.server?.port || 5173;
          const url = await connect({ addr: port });
          console.log(`\n[ngrok] tunnel started: ${url}\n`);

          server.httpServer?.once("close", async () => {
            try {
              await kill();
            } catch (err) {
              console.warn("[ngrok] failed to stop cleanly", err);
            }
          });
        } catch (error) {
          console.warn(
            "[ngrok] could not start. Install the ngrok package or disable VITE_NGROK.",
            error,
          );
        }
      },
    },
  ],
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT || 5173),
    strictPort: false,
    cors: true,
    fs: {
      strict: false,
    },
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "::1",
      ".ngrok.io",
      "unsavory-dreadlock-exclaim.ngrok-free.dev",
    ],
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});