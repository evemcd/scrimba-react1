/**
Challenge 1: 
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
- Change the image styling to happen in CSS instead of in-line. For practice, add a new class to the image in order to style it

Challenge 2: move theHeader, Footer and MainContent components
into their own files.
*/

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {
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
        <App />
    </div>,
    document.getElementById("root")
)