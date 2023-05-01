import { useEffect, useState } from 'react';
import './Pagination.scss';

export function Pagination({ pages, onChange }) {
    const [page, setPage] = useState(1);

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (page < pages) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        onChange(page);
    }, [page, onChange]);

    const isPrevBtnDisabled = page === 1;
    const isNextBtnDisabled = pages <= page;

    return (
        <div className="pagination">
            <button
                className="previos-btn"
                onClick={handlePrevClick}
                disabled={isPrevBtnDisabled}
            >
                Prev
            </button>
            <button
                className="next-btn"
                onClick={handleNextClick}
                disabled={isNextBtnDisabled}
            >
                Next
            </button>
        </div>
    );
}
