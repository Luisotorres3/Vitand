import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("responsive, navigation, product filters, FAQ and accessible dialog", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      audit.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    if ([1440, 768, 390].includes(width))
      await page.screenshot({
        path: `artifacts/landing-${width}.png`,
        fullPage: true,
      });
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const trigger = page
    .getByRole("button", { name: "Solicitar acceso B2B" })
    .first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("No se ha enviado ninguna solicitud");
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(audit.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual([]);
  await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() =>
      Boolean(document.activeElement?.closest("dialog")),
    ),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.getByRole("button", { name: "Japón", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(2);
  await page.getByRole("button", { name: "Corea", exact: true }).click();
  await expect(page.locator(".product-card")).toHaveCount(2);
  await expect(page.locator(".product-card").first()).toContainText("Korean");
  await page.getByRole("button", { name: "Toda la selección" }).click();
  await expect(page.locator(".product-card")).toHaveCount(4);
  const faq = page.getByRole("button", {
    name: "¿Los precios serán públicos?",
  });
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#faq-answer-1")).toBeVisible();
  await faq.click();
  await expect(page.locator("#faq-answer-1")).toBeHidden();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await expect(
    page.getByRole("navigation", { name: "Navegación móvil" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Navegación móvil" })
    .getByRole("link", { name: "Productos" })
    .click();
  await expect(page).toHaveURL(/#productos$/);
  await expect(
    page.getByRole("navigation", { name: "Navegación móvil" }),
  ).toBeHidden();
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menú" })).toBeFocused();
  expect(errors).toEqual([]);
});

