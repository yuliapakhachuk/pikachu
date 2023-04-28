import "./Pagination.scss"

export function Pagination({pages, page, onChange}) {
    return (
        <div className="pagination">
            <button className="previos-btn" onClick={onChange}>
                Prev
            </button>
            <button className="next-btn" onClick={onChange}>
                Next
            </button>
        </div>
    )
}