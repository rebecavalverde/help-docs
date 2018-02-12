const fs = require('fs');
const path = require('path');

const axios = require('axios');
const yaml = require('js-yaml');

const DIR_OUTPUT = path.resolve(`${__dirname}/../../docs/en/editor/generated`);
const TPL = fs.readFileSync(`${__dirname}/editor-item.tpl.md`).toString();
const TPL_CONTENT = fs.readFileSync(`${__dirname}/editor-item-content.tpl.md`).toString();

async function getEditorItems() {
  const json = await axios.get('https://flat.io/locales/default/help.json');
  return json.data.editor;
}

async function buildPages() {
  const items = await getEditorItems();
  const config = yaml.safeLoad(fs.readFileSync(`${__dirname}/items.yml`, 'utf8'));

  Object.keys(items).forEach(async (key) => {
    try {
      const content = items[key];
      const itemConfig = config[key] || {};

      if (itemConfig.skip) {
        console.log(`SKIP ${key} (config)`);
        return;
      }

      await axios.get(`https://flat.io/img/help/editor_${key}_en.gif`);
    
      let html = itemConfig.tpl === 'content' ? TPL_CONTENT : TPL;
      html = html.replace(/__KEY__/g, key);
      html = html.replace(/__TITLE__/g, content.title);
      html = html.replace(/__DESCRIPTION__/g, content.description);      
      fs.writeFileSync(`${DIR_OUTPUT}/${key}.md`, html);
    }
    catch (err) {
      console.log(`SKIP ${key}: ${err}`);
    }
  });
}

buildPages();