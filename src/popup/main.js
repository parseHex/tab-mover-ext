document.getElementById('move-beginning').addEventListener('click', () => {
	chrome.extension.getBackgroundPage().moveToBeginning();
});
document.getElementById('move-left').addEventListener('click', () => {
	console.log(chrome.extension.getBackgroundPage());
	chrome.extension.getBackgroundPage().moveToLeft();
});
document.getElementById('move-right').addEventListener('click', () => {
	chrome.extension.getBackgroundPage().moveToRight();
});
document.getElementById('move-end').addEventListener('click', () => {
	chrome.extension.getBackgroundPage().moveToEnd();
});
