import { Link } from "react-router-dom"

export function Menu(){
    return <div>
        <nav>
            <ul className="links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                    <Link to="/tareas">App Tareas</Link>
                </li>
            </ul>
        </nav>
    </div>
}