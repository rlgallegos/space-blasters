import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <>
            <img id="page-not-found" alt="404, Page Not Found" src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg' />
            <Link to="/">Go back</Link>
        </>
    )
}

export default PageNotFound