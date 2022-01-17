import React, { useState, useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/settings/context';
import Pagination from './pagination';
import './list.scss';

export default function List({ list, toggleComplete }) {

  const context = useContext(SettingsContext)

  let n = context.itemsPerPage;
  const [itemsToSkip, setItemsToSkip] = useState(0)
  const [pagesArray, setPagesArray] = useState([1]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  let listFiltered = context.displayCompleted ? list : list.filter(item => !item.complete);

  useEffect(() => {
    let updatedNumberOfPages = Math.ceil(listFiltered.length / n);
    if (numberOfPages !== updatedNumberOfPages) {
      setNumberOfPages(updatedNumberOfPages ? updatedNumberOfPages : 1);
    }
  }, [listFiltered])

  useEffect(() => {
    if (numberOfPages > pagesArray[pagesArray.length - 1]) {
      setPagesArray([...pagesArray, numberOfPages])
    } else if (numberOfPages < pagesArray[pagesArray.length - 1]) {
      setPagesArray(pagesArray.slice(0, numberOfPages))
    }
  }, [numberOfPages])

  let listToDisplay = listFiltered.slice(itemsToSkip, itemsToSkip + n);

  function nextPage() {
    setItemsToSkip(itemsToSkip + n);
    setCurrentPage(currentPage + 1)
  }

  function prevPage() {
    setItemsToSkip(itemsToSkip - n);
    setCurrentPage(currentPage - 1);
  }

  function selectPage(page, event) {
    console.log(event)
    setItemsToSkip((page - 1) * n)
    setCurrentPage(page);
  }

  return (
    <>
      <div>
        {listToDisplay.map(item => {
          return <div key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </div>
        })}
      </div>
      <Pagination itemsToSkip={itemsToSkip} prevPage={prevPage} nextPage={nextPage} pagesArray={pagesArray} currentPage={currentPage} selectPage={selectPage} listFiltered={listFiltered} />
    </>
  )
}