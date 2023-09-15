### Project Features:

- Project with Fake Data
- Cart calculation
- Validation using toast


### Discussing how I managed the state in my assignment project:

**1.  useState:**

useState is a React hook used for managing local state within functional components. It allows you to define and update component-specific state variables, enabling dynamic content and interaction in your components.

For component-specific data that doesn't need to be shared with other components, use the useState hook. It's great for managing local state within a component.

I have used this useState hook in this project to update some data of components.

**2. useEffect:**

useEffect, another React hook, is used for handling side effects in functional components. You can use it to perform actions like data fetching, DOM manipulation, or subscriptions, and ensure they occur at the appropriate times during the component's lifecycle.

I also have used this useEffect hook in this project to manage side effects. I used it with an empty dependency array. using the dependency it will consider when to render. 

Together, useState and useEffect provide essential tools for building robust and interactive React applications, offering a way to manage state and manage side effects in a functional component-based architecture.
