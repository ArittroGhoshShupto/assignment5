# Dev Stack

Dev Stack is a React project for exploring different web technologies. Users can see technology details and add technologies to their own stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* JSON
* Vite

## 3 Features

* Users can see different technologies and their details.
* Users can add and remove technologies from their stack.
* Toast messages show when a technology is added or removed.

---

# React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from a parent to a child. State is used to store data that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and change data.

I used it to store the selected technologies and to change between Available and Your Stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

I did not use `useEffect` in this project. I used `use()` and `Suspense` to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It also helps React update the list correctly.

I used the technology `id` as the key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it when the stack is empty. If there are no selected technologies, I show **"Your stack is empty"**.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent can send data to a child using props.

The parent can also send a function to the child. The child can call that function to send data or update something in the parent.

