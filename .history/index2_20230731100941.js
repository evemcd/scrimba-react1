/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px


const section = (
    <div>
        <img src="./react-logo.png" alt="React logo" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    section,
    document.getElementById("root")
)

 */


function PageComponent() {
    return (
        <div>
            <img scr="./react-logo.png" />
            <h1>Reasons why I'm excited to learn React:</h1>
            <ol>
                <li>To expand on my knowledge</li>
                <li>To be able to get a job</li>
                <li>To have fun programming</li>
            </ol>
        </div>
    )
}

ReactDom.render(
    <div>
        <PageComponent />
    </div>,
    document.getElementById("root")
)