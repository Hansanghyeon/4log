(function () {
  window.addEventListener('load', () => {
    console.log('test');
    const body = document.querySelector('body');
    const rml = document.querySelector('.rml-container');
    // if (!body || !rml) throw new Error(body);
    // white list
    if (body.classList.contains('upload-php')) {
      const aiotNode = rml.querySelectorAll('.aiot-node');
      aiotNode.forEach((node) =>
        node.addEventListener('click', () => console.log(node))
      );
    }
    if (body.classList.contains('post-php')) {
      const utileLink = document.querySelector(
        'div[data-name="utile-link"].acf-field .acf-url'
      );
      const Input = utileLink.querySelector('input');
      const originalIcon = utileLink.querySelector('.acf-icon');

      // icon tagname change
      const tagChanger = (original, replace) => {
        const newEl = document.createElement(replace);
        for (let i = 0, l = original.attributes.length; i < l; ++i) {
          const o = original;
          const nodeName = o.attributes.item(i).nodeName;
          const nodeValue = o.attributes.item(i).nodeValue;
          newEl.setAttribute(nodeName, nodeValue);
        }
        original.parentNode.replaceChild(newEl, original);
      };
      tagChanger(originalIcon, 'a');

      const newIcon = utileLink.querySelector('.acf-icon');
      Input.addEventListener('change', (e) => {
        const notionDeepLink = new RegExp('(?:https|http)://(.+notion.so.+)');
        const result = notionDeepLink.exec(e.target.value);
        if (result !== null)
          newIcon.setAttribute('href', `notion://${result[1]}`);
        else newIcon.setAttribute('href', `notion://${e.target.value}`);
      });
    }
  });
})();
