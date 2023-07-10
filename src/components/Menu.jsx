import { Link } from "react-router-dom"

export function Menu(){
    return <div>
        <nav>
            <ul className="links">
                <li>
                    <Link className="colorTexto" to="/">Home</Link>
                </li>
                <li>
                    <Link className="colorTexto" to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                    <Link className="colorTexto" to="/tareas">App Tareas</Link>
                </li>
            </ul>
        </nav>
    </div>
}