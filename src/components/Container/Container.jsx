import "./Container.scss";

export function Container({children}) {
    return (
        <div className="container">
            { children }
        </div>
    )
}