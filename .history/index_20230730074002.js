//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
//ReactDOM.render(<ul><li>HTML</li><li>CSS</li></ul>,document.getElementById("root"))

/* 
Challenge: Create your own custom React component!
Call it "MainContent", and have it return a simple h1 element that says "I'm learning React!"
Afterward, render it below the Navbar (which you can do inside the ReactDOM.render call below)
*/
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