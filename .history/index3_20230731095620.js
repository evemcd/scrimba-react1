/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function PageComponent() {
    <div>
        <img scr="./react-logo.png" />
        <h1>Reasons why I'm excited to learn React:</h1>
        <ol>
            <li>To expand on my knowledge</li>
            <li>To be able to get a job</li>
            <li>To have fun programming</li>
        </ol>
    </div>
}

ReactDom.render(
    <div>
        <PageComponent />
    </div>,
    document.getElementById("root")
)