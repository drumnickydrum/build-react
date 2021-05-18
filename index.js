/*
 * Creating an element
 */

// jsx
const element = <h1 title='foo'>Hello</h1>;
// ↓
// React function call to create an element
// React.createElement(element, props, children)
const element = React.createElement('h1', { title: 'foo' }, 'Hello');
// ↓
// final created element
const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: 'Hello',
  },
};

/*
 * Rendering an element
 */

// render changes the DOM
ReactDOM.render(element, container);
// ↓
// create nodes and attach props
const node = document.createElement(element.type); // 'h1'
node['title'] = element.props.title; // 'foo'

const text = document.createTextNode(''); // children
text['nodeValue'] = element.props.children; // 'Hello'
// ↓
// append text node to h1 node
// append h1 node to container
node.appendChild(text);
container.appendChild(node);
