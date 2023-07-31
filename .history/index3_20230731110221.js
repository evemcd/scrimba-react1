/**
Challenge: 
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're excited to be learning React :)
Render your list to the page

 */

function PageComponent() {
    return (
        <ol>
            <li>To expand on my knowledge</li>
            <li>To be able to get a job</li>
            <li>To have fun programming</li>
        </ol>
    )
}

ReactDOM.render(
    <div>
        <PageComponent />
    </div>,
    document.getElementById("root")
)