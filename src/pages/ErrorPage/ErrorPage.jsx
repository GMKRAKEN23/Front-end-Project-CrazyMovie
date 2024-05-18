import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Logo from "../../components/Logo";

function ErrorPage() {
    const error = useRouteError();
    console.log("Erreur reçue :", error);

    if (isRouteErrorResponse(error)) {
        console.log("C'est une RouteErrorResponse avec le statut :", error.status);

        if (error.status === 400) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div>
                        <div className="flex items-center justify-center mb-5">
                            <Logo />
                        </div>
                        <h1 className="text-white">Error 400</h1>
                        <h2 className="font-bold text-white">This page does not exist!</h2>
                    </div>
                </div>
            );
        }
        if (error.status === 401) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <div>
                        <div className="flex items-center justify-center mb-5">
                            <Logo />
                        </div>
                        <h1 className="my-8 text-4xl tracking-widest text-white">Error 401</h1>
                        <h2 className="text-xl font-bold tracking-widest text-white">You are not authorized to view this page!</h2>
                    </div>
                </div>
            );
        }
        if (error.status === 404) {
            return (
                <div className="flex items-center justify-center h-screen text-center">
                    <div>
                        <div className="flex items-center justify-center mb-5">
                            <Logo />
                        </div>
                        <h1 className="my-8 text-4xl tracking-widest text-white">Error <span className="font-bold text-orange-600 ">404</span></h1>
                        <h2 className="text-xl font-bold leading-loose tracking-widest text-white">The Page You Are <br />Looking For Cannot Be Found!</h2>
                    </div>
                </div>
            );
        }
        if (error.status === 503) {
            return (
                <div className="flex items-center justify-center h-screen text-center">
                    <div>
                        <div className="flex items-center justify-center mb-5">
                            <Logo />
                        </div>
                        <h1 className="my-8 text-4xl tracking-widest text-white">Error 503</h1>
                        <h2 className="text-xl font-bold leading-loose tracking-widest text-white">Service unavailable. Please try again later !</h2>
                    </div>
                </div>
            );
        }

        return <div>Error {error.status}: {error.statusText}</div>;
    }
}

export default ErrorPage;