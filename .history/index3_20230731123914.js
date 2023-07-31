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
Part 3:
- Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
 */

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Content() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>To expand on my knowledge</li>
                <li>To be able to get a job</li>
                <li>To have fun programming</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2023 McDermott development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <div>
        <Page />
    </div>,
    document.getElementById("root")
)