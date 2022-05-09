// 1. Go to https://twitter.com/%your%/following list age
// 2. Paste this code in browser console
// 3. Enter
document.querySelectorAll("[data-testid*='unfollow']").forEach(function(ev) {
	ev.click();
  $("div[data-testid='confirmationSheetConfirm']").click();
});
