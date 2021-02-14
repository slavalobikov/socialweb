import React, {useState} from 'react'
import s from './Paginator.module.css'
import cn from "classnames";

type PropsType = {
    totalItemsCount: number,
    pageSize:number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for (let i =1; i<= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    console.log('totalItemsCount', totalItemsCount)


    return <div className={s.paginator}>
        <button disabled={portionNumber <= 1} onClick={() => { setPortionNumber(portionNumber - 1) }}>Предыдущие</button>

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        <button disabled={portionCount <= portionNumber} onClick={() => { setPortionNumber(portionNumber + 1) }}>Следующие</button>


    </div>
};

export default Paginator;