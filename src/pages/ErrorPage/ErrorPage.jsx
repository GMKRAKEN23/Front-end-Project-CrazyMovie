import { useRouteError } from "react-router";

function ErrorPage(){

    const error = useRouteError();
    console.log(error)
}

export default ErrorPage;