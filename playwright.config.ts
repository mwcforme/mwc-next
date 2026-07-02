import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: 0,
  reporter: "line",
  use: {
    baseURL: "http://localhost:3000",
    // Sandbox chromium — never run `playwright install`
    launchOptions: { executablePath: "/opt/pw-browsers/chromium" },
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
