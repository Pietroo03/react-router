import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <main className="text-center pt-4 vh-100">
            <h2 className=" mt-4 text-primary">Nessun Post Trovato</h2>
            <Link to={'/posts'} className="btn btn-primary">Torna alla lista dei Posts</Link>
        </main>
    )
}