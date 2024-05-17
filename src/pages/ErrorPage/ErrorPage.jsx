import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log("Erreur reçue :", error);

    if (isRouteErrorResponse(error)) {
        console.log("C'est une RouteErrorResponse avec le statut :", error.status);

        if (error.status === 400) {
            return <div>Cette page n&apos;existe pas</div>;
        }
        if (error.status === 401) {
            return <div>Vous n&apos;êtes pas autorisé à voir cette page.</div>;
        }
        if (error.status === 404) {
            return <div>La Page que vous chercher n&apos;est pas trouvable !</div>;
        }
        if (error.status === 503) {
            return <div>Service indisponible. Veuillez réessayer plus tard.</div>;
        }

        return <div>Erreur {error.status}: {error.statusText}</div>;
    }

    return (
        <>
            <h2 className="text-white">Erreur</h2>
            <p className="text-white">{error.message || error.status}</p>
        </>
    );
}

export default ErrorPage;
