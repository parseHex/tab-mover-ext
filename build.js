const admZip = require('adm-zip');
const path = require('path');
const fs = require('fs');

function readJSON(file) {
	const filePath = path.resolve(__dirname, file);
	return JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
}
function getVersion() {
	const manifest = readJSON('./src/manifest.json');
	return manifest.version;
}
function getName() {
	const pkg = readJSON('./package.json');
	return pkg.name;
}
function getZipName() {
	const name = getName();
	const version = getVersion();
	return `${name}-v${version}.zip`;
}

const zip = new admZip();
zip.addLocalFolder(path.resolve(__dirname, './src'));
zip.writeZip(path.resolve(__dirname, './builds/' + getZipName()));
