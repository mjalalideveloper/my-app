# React

## What is React?

React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. It was developed by Facebook and is maintained by Facebook and a community of developers.

## Key Features of React

1. **Component-Based Architecture**: React allows you to build encapsulated components that manage their own state, then compose them to make complex UIs.

2. **JSX Syntax**: React uses JSX, a syntax extension that allows you to write HTML-like code within JavaScript. This makes it easier to visualize the structure of your UI.

3. **Virtual DOM**: React uses a virtual DOM to optimize updates to the actual DOM. When the state of a component changes, React updates the virtual DOM first, then efficiently updates the real DOM to match.

4. **Unidirectional Data Flow**: React follows a unidirectional data flow, meaning data flows from parent components to child components. This makes it easier to understand and debug your application.

5. **Hooks**: Introduced in React 16.8, hooks allow you to use state and other React features in functional components, making it easier to manage state and side effects.

## Instalation with vite

To create a new React project using Vite, you can use the following command:

```bash
npm create vite@latest react-app-name -- --template react
```

Replace `react-app-name` with your desired project name. This command will set up a new React project with Vite as the build tool.

After running the command, navigate to your project directory and install the dependencies:

```bash
cd react-app-name
npm install
```

Once the dependencies are installed, you can start the development server with:

```bash
npm run dev
```

This will start the Vite development server, and you can view your React application in the browser at `http://localhost:3000` (or another port if 3000 is already in use).

## React Project Structure

A typical React project structure created with Vite looks like this:

```
react-app-name/
├── node_modules/          # Project dependencies
├── public/                # Static assets
│   └── index.html         # Main HTML file
├── src/                   # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable React components
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point for the React application
│   └── index.css          # Global styles
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Vite configuration file
└── README.md              # Project documentation
```

## What is Component-Based Architecture?

Component-Based Architecture is a design pattern used in software development where the user interface (UI) is built using independent, reusable components. Each component encapsulates its own structure, behavior, and state, allowing developers to create complex UIs by composing these smaller, manageable pieces.

## Style(CSS) in React

In React, you can style your components using various methods. Here are some common approaches:

1. **CSS Stylesheets**: You can create a separate CSS file and import it into your component.

```jsx
import "./Component.css"; // Just import the CSS file

function Component() {
  return <div className="component">Hello, World!</div>;
}
export default Component;
```

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is commonly used in React to describe the structure of the user interface. JSX makes it easier to visualize the UI and how it will be rendered in the browser.

Here is an example of JSX:

```jsx
const element = <h1>Hello, world!</h1>;
```

In this example, `<h1>Hello, world!</h1>` is JSX code that represents a heading element. When using JSX, you can also embed JavaScript expressions within curly braces `{}`:

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

In this case, the value of the `name` variable will be inserted into the JSX, resulting in `<h1>Hello, John!</h1>` when rendered.

In React Components, JSX is typically used to define the component's structure:

```jsx
function Greeting() {
  let name = "Alice";
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
```

In this example, the `Greeting` component returns JSX that includes a `div` containing an `h1` element with a dynamic greeting message.

## What is Virtual DOM?

The Virtual DOM is a programming concept implemented by libraries like React to optimize rendering performance. It is a lightweight copy of the actual DOM (Document Object Model) that allows React to make efficient updates to the user interface.

When the state of a React component changes, React creates a new Virtual DOM representation of the UI. It then compares this new Virtual DOM with the previous version using a process called "reconciliation." By identifying the differences (or "diffs") between the two versions, React can determine the minimal set of changes needed to update the actual DOM.

This approach has several advantages:

1. **Performance**: Updating the actual DOM can be slow and inefficient, especially for complex UIs. By using the Virtual DOM, React minimizes the number of direct manipulations to the real DOM, leading to faster updates and a smoother user experience.

2. **Declarative UI**: Developers can describe what the UI should look like at any given point in time, and React takes care of updating the DOM to match that description. This makes it easier to reason about the UI and manage state changes.

3. **Cross-Platform**: The Virtual DOM concept can be applied to different platforms, not just web browsers. For example, React Native uses a similar approach to render native mobile UIs.

Overall, the Virtual DOM is a key feature of React that contributes to its efficiency and ease of use in building dynamic user interfaces.

![React Virtual DOM](https://miro.medium.com/v2/resize:fit:1400/1*ZkX4bYkX8bX9F3t5rXWf1g.png)

## Class vs Functional Components Sintax

### Class Components

```jsx
import React, { Component } from 'react';
class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default MyComponent;`
```

### Functional Components

```jsx
import React from "react";
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default MyComponent;
```

## Props in React

Props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only and allow you to customize the behavior and appearance of child components based on the data provided by the parent.

Here is an example of how to use props in React:

```jsx
// Child Component
function Greeting(props) {
  // props is an object that holds the passed data
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

```jsx
// Parent Component
import React from "react";
import Greeting from "./Greeting";
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
```

Output:

```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

### Prop Destructuring

You can also use destructuring to extract specific props directly in the function parameters:

```jsx
function Greeting({ firstname, lastname }) {
  // Destructuring props
  return (
    <h1>
      Hello, {firstname} {lastname}!
    </h1>
  );
}
```

```jsx
function App() {
  return (
    <div>
      <Greeting firstname="Alice" lastname="Smith" />
      <Greeting firstname="Bob" lastname="Johnson" />
      <Greeting firstname="Charlie" lastname="Brown" />
    </div>
  );
}
```

Output:

```
Hello, Alice Smith!
Hello, Bob Johnson!
Hello, Charlie Brown!
```

### Spreading Props

You can also spread props using the spread operator (`...`). This is useful when you want to pass all the properties of an object as props to a component.

```jsx
function Greeting({ firstname, lastname }) {
  return (
    <h1>
      Hello, {firstname} {lastname}!
    </h1>
  );
}
```

```jsx
function App() {
  const users = [
    { firstname: "Alice", lastname: "Smith" },
    { firstname: "Bob", lastname: "Johnson" },
    { firstname: "Charlie", lastname: "Brown" },
  ];

  return (
    <div>
      <greeting {...users[0]} />
      <greeting {...users[1]} />
      <greeting {...users[2]} />
    </div>
  );
}
```

Output:

```
Hello, Alice Smith!
Hello, Bob Johnson!
Hello, Charlie Brown!
```

### Rename Props

You can rename props when passing them to a component by using different names in the parent component.

```jsx
function Product({ title: productTitle, info }) {
  // Renaming title to productTitle

  const title = "Product card";

  return (
    <div>
      <h1 className="card">{title}</h1>
      <div>
        <h3 className="title">{productTitle}</h3>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}
```

```jsx
function App() {
  return (
    <div>
      <Product title="Laptop" info="A high-performance laptop." />
      <Product title="Smartphone" info="A latest model smartphone." />
      <Product title="Tablet" info="A lightweight tablet." />
    </div>
  );
}

export default App;
```

Output:

```
Product card
Laptop
A high-performance laptop.

Product card
Smartphone
A latest model smartphone.

Product card
Tablet
A lightweight tablet.
```

### Default Props

You can set default values for props in case they are not provided by the parent component. This can be done by defining a `defaultProps` property on the component.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.defaultProps = {
  name: "Guest", // Default value for name prop
};

export default Greeting;
```

```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" /> {/* name prop provided */}
      <Greeting /> {/* name prop not provided, will use default */}
    </div>
  );
}
export default App;
```

Output:

```
Hello, Alice!
Hello, Guest!
```

> Or

Using ES6 default parameters:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
export default Greeting;
```

```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" /> {/* name prop provided */}
      <Greeting /> {/* name prop not provided, will use default */}
    </div>
  );
}
export default App;
```

Output:

```
Hello, Alice!
Hello, Guest!
```

### Children Prop

In React, the `children` prop is a special prop that allows you to pass elements or

components as the content between the opening and closing tags of a component. This is useful for creating reusable components that can wrap other elements.

Here is an example of how to use the `children` prop in React:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
```

```jsx
import React from "react";
import Card from "./Card";
function App() {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This is another card with different content.</p>
      </Card>
    </div>
  );
}
export default App;
```

Output:

```
<div class="card">
  <h2>Card Title</h2>
  <p>This is some content inside the card.</p>
</div>
<div class="card">
  <h2>Another Card</h2>
  <p>This is another card with different content.</p>
</div>
```


