Dev Stack Project
Dev Stack is a React project for exploring different web technologies so that any use can see technology details and add technologies to their own stack which is selected by them

Technologies Used

React
TypeScript
Tailwin CSS
DaisyUI
React Toastify
JSON
Vite

3 Features

Users can easily see different technologies and their details.
Users can also add and remove technologies from their stack.
Toast messages will be  shown when a technology is added or removed.



React Questions


1.What is JSX, and why is it used in React?
JSX lets us write HTML type of  code inside JavaScript that  makes React code easier to write and understand.
2.What is the difference between props and state?
Props are used to send data from a parent to a childand and again  State is used to store data that can be  change.
3.What does the useState hook do, and where did you use it in this project?
useState is used to store and change data anytime I mainly  used it to store the selected technologies and to change between available and Your Stack.
4.What does the usEffect hook do, and why did you need it to load the JSON data?
useEffect is used to run code after a component renders but i  did not use useEffect in this project. I used use() and Suspense to load the JSON data
5.Why does every item in a .map() list need a unique key prop?
The key  helps us to  React identify each item in a list and It also helps React update the list correctly I used the technology id as the key.
6.What is conditional rendering? Show one place you used it.
Conditional rendering means showing something based on a condition.I used it when the stack is empty. If there are no selected technologies, I show Your stack is empty.
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent can send data to a child using propshe parent can also send a function to the child. The child can call that function to send data or update something in the paren
