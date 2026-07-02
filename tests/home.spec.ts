import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("homepage smoke", () => {
  test("renders with hero headline and lead form", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText(/you don.t feel fine/i);
    await expect(page.locator("#hero-form")).toBeVisible();
    await expect(page.locator("#hero-form button[type=submit]")).toContainText(/check availability/i);
  });

  test("mobile 390px: primary CTA reachable above the fold", async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const page = await ctx.newPage();
    await page.goto("/");
    // Header BOOK MY VISIT button must be visible without scrolling
    const cta = page.locator("header a", { hasText: "BOOK MY VISIT" });
    await expect(cta).toBeVisible();
    const box = await cta.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThan(844);
    await ctx.close();
  });

  test("mobile: sticky call+book bar present", async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const page = await ctx.newPage();
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 1500));
    const bar = page.locator(".mobile-bar");
    await expect(bar).toBeVisible();
    await expect(bar.locator("a[href^='tel:']")).toBeVisible();
    await ctx.close();
  });

  test("lead form validates before submit", async ({ page }) => {
    await page.goto("/");
    await page.locator("#hero-form button[type=submit]").click();
    // Should show inline validation errors, not navigate away
    await expect(page.locator("#hero-form .ferr").first()).toBeVisible();
    await expect(page).toHaveURL("/");
  });
});

test.describe("accessibility", () => {
  test("axe: no serious or critical violations on /", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);
    const results = await new AxeBuilder({ page }).analyze();
    const bad = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    if (bad.length) {
      console.log(JSON.stringify(bad.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help })), null, 2));
    }
    expect(bad).toEqual([]);
  });
});
