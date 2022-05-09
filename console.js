document.querySelectorAll("[data-testid*='unfollow']").forEach(function(ev) {
	ev.click();
  $("div[data-testid='confirmationSheetConfirm']").click();
});
