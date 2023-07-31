/**
Challenge: 
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're excited to be learning React :)
Render your list to the page
Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`, include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: "© 20xx <last name here> development. All rights reserved."
 */

function HeaderComponent() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
            <h1>Reasons I'm excited to learn React</h1>
        </header>
    )
}

function PageComponent() {
    return (
        <ol>
            <li>To expand on my knowledge</li>
            <li>To be able to get a job</li>
            <li>To have fun programming</li>
        </ol>
    )
}

function FooterComponent() {
    return (
        <p>© 2023 McDermott development. All rights reserved.</p>
    )
}

ReactDOM.render(
    <div>
        <HeaderComponent />
        <PageComponent />
        <FooterComponent />
    </div>,
    document.getElementById("root")
)