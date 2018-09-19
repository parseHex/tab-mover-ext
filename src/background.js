function moveTab(id, index) {
	chrome.tabs.move(id, {
		index,
	});
}
function getThisTab() {
	return new Promise(function (resolve) {
		chrome.tabs.query({ active: true }, function (tabs) {
			resolve(tabs[0]);
		});
	});
}

async function moveToBeginning() {
	const tab = await getThisTab();
	moveTab(tab.id, 0);
}
async function moveToLeft() {
	const tab = await getThisTab();
	moveTab(tab.id, tab.index - 1);
}
async function moveToRight() {
	const tab = await getThisTab();
	moveTab(tab.id, tab.index + 1);
}
async function moveToEnd() {
	const tab = await getThisTab();
	moveTab(tab.id, -1);
}

// context menu setup

function createMenu(properties) {
	return new Promise(function (resolve) {
		chrome.contextMenus.create(properties, () => {
			resolve();
		});
	});
}

(async () => {
	const mainID = 'tab_mover';

	await createMenu({
		id: mainID + '_main',
		title: 'Move Tab...',
	});
	await createMenu({
		parentId: mainID + '_main',
		id: mainID + '_beginning',
		title: 'to the far left',
		onclick: moveToBeginning,
	});
	await createMenu({
		parentId: mainID + '_main',
		id: mainID + '_left',
		title: 'to the left',
		onclick: moveToLeft,
	});
	await createMenu({
		parentId: mainID + '_main',
		id: mainID + '_right',
		title: 'to the right',
		onclick: moveToRight,
	});
	await createMenu({
		parentId: mainID + '_main',
		id: mainID + '_end',
		title: 'to the far right',
		onclick: moveToEnd,
	});
})();
