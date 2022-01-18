import React, { useState, useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/settings/context';
import Pagination from './pagination';
import './list.scss';

export default function List({ list, toggleComplete }) {

  const context = useContext(SettingsContext)
  const n = context.itemsPerPage;
  const [itemsToSkip, setItemsToSkip] = useState(0)
  const [pagesArray, setPagesArray] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cleanList, setCleanList] = useState(list)
  const [listToDisplay, setListToDisplay] = useState([])

  useEffect(() => {
    setCleanList(context.displayCompleted ? list : list.filter(item => !item.complete))
  }, [list, context.displayCompleted])

  useEffect(() => {
    let updatedNumberOfPages = !Math.ceil(cleanList.length / n) ? 1 : Math.ceil(cleanList.length / n);
    let updatedPagesArray = [];
    for (let i = 1; i <= updatedNumberOfPages; i++) {
      updatedPagesArray.push(i)
    }
    setPagesArray(updatedPagesArray)
    let updatedList = cleanList.slice(itemsToSkip, itemsToSkip + n);

    if (updatedList.length === 0) {
      let lastPage = pagesArray.length;
      selectPage(lastPage);
    }
  }, [cleanList, n, pagesArray])

  useEffect(() => {
    let updatedList = cleanList.slice(itemsToSkip, itemsToSkip + n);

    if (updatedList.length === 0) {
      let lastPage = pagesArray.length;
      selectPage(lastPage);
    }
    setListToDisplay(updatedList);
  }, [pagesArray, currentPage])

  function nextPage() {
    setItemsToSkip(itemsToSkip + n);
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setItemsToSkip(itemsToSkip - n);
    setCurrentPage(currentPage - 1);
  }

  function selectPage(page) {
    setItemsToSkip((page - 1) * n);
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
      <Pagination itemsToSkip={itemsToSkip} prevPage={prevPage} nextPage={nextPage} pagesArray={pagesArray} currentPage={currentPage} selectPage={selectPage} cleanList={cleanList} />
    </>
  )
}