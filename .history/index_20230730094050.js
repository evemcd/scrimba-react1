//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
/*
Challenge 1: Display an unordered list with two list items
ReactDOM.render(<ul><li>HTML</li><li>CSS</li></ul>,document.getElementById("root"))

Challenge 2: Create your own custom React component!
Call it "MainContent", and have it return a simple h1 element that says "I'm learning React!"
Afterward, render it below the Navbar (which you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}


ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)


Challenge 3 - recreate the below line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).
ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

This way of coding is imperative, every step needs to be written and explained. React is declarative.

Cannot place two parent elements beside each other and render them, I need a parent element like div to render two child elements


const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
//console.log(page) output: {type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}

ReactDOM.render(
    page,
    document.getElementById("root")
)

Challenge 4: 
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements 
    - Inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now

const navbar = (
    <nav>
        <h1>Brand Name</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)


Changes in React 18:
17: ReactDOM.render(navbar, document.getElementById("root"))
18: ReactDOM.createRoot(document.getElementById("root")).render(navbar)
OR
18: const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(navbar)


Challenge 5: find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM
1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
 */

const samplePage (
    <div>
        <h1>Headline</h1>
        <p>This is just gibberish to fill the space.</p>
        <h2>My priorities:</h2>
        <ol>
            <li>Food</li>
            <li>Drink</li>
            <li>Sleep</li>
        </ol>
    </div>
)