import { Selector } from "testcafe";

fixture`Find element with text`.page("https://rozetka.ua");

test("Check an element's in a page", async (t) => {
  //   const selector = Selector("meta").withText("Доставка по всей Украине").exists;
  //   await t.expect(selector).ok();
//   const submitButtonExists = Selector("a").withText(
//     " войдите в личный кабинет "
//   ).exists;

//   await t.expect(submitButtonExists).ok();
  const element = Selector("meta").withText("Доставка по всей Украине").exists;
    await t.expect(element).ok();
});
