import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `
# Welcome to my Markdown Previewer with React: A JavaScript Library for Building User Interfaces

## The Creators of React

React was originally created by **Jordan Walke**, a software engineer at [Facebook](https://www.facebook.com). It was later developed and maintained by an open-source community and supported by **Facebook**.

> "React has fundamentally changed the way we build web applications." - A Developer's Perspective

### Key React Features

- **Component-Based**: Build encapsulated components that manage their own state.
- **Declarative**: React makes it easy to design simple views for each state.
- **Learn Once, Write Anywhere**: You can use React to create web apps, native mobile apps, and more.

#### Inline Code and Code Block Example

You can include \`inline code\` like this: \`const element = <h1>Hello, world!</h1>\`

Here's a larger code block for defining a simple React component:

\`\`\`javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

---
Happy Coding with **React**!
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
    <><div>
      <h1>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
      </div></>
  )
}

export default App
