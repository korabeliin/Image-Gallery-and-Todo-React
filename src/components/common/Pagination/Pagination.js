import React, {useMemo} from 'react';

import styles from './Pagination.module.css'

const Pagination = ({page, maxPages, onChangePage}) => {

    const pages = useMemo(() => {
        if(maxPages < 5) {
            return Array.from({length: 5}).map((el, index) => index + 1);
        }

        const lastPages = maxPages - page;

        if(lastPages < 3) {
            return Array.from({length: 5}).map((el, index) => maxPages - 4 + index);
        }

        if (page < 3) {
            return Array.from({length: 5}).map((el, index) => index + 1);
        }
        return Array.from({length: 5}).map((el, index) => page + index - 2);
    }, [page, maxPages]);

    const handlePrevPageClick = () => {
        onChangePage(1)
    }

    const handleNextPageClick = () => {
        onChangePage(maxPages)
    }

    if(maxPages <= 1) return null

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.itemWrapper} onClick={handlePrevPageClick}>
                Prev
            </div>
            {pages.map(item =>
                <div
                    className={page === item ? styles.activeItemWrapper : styles.itemWrapper}
                    onClick={() => onChangePage(item)}
                    key={item}
                >
                    {item}
                </div>
            )}
            <div className={styles.itemWrapper} onClick={handleNextPageClick}>
                Next
            </div>
        </div>
    );
};

export default Pagination;