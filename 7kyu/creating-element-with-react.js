let React = require("react");

const createElement = (content, tag, props) => React.createElement(tag || 'div', props, content);

const createUnorderedList = (list) => {
    let content = [];
    for (let i in list) {
        content.push(React.createElement('li', { key: i }, list[i]));
    }

    return React.createElement('ul', null, content);
}