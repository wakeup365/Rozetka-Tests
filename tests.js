import { Selector } from "testcafe";

fixture`Find element with text`.page("https://rozetka.ua");

test("Check if element's in a page", async (t) => {
  const element = Selector("*").withText("Доставка по всей Украине");

  await t.expect(element.exists).ok();
});
