import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../context/settings/context';

export default function Pagination({ itemsToSkip, prevPage, nextPage, pagesArray, currentPage, selectPage, listFiltered }) {

  const context = useContext(SettingsContext);
  let n = context.itemsPerPage;

  return (
    <>
      {itemsToSkip ? <button onClick={prevPage}>Previous </button> : ''}
      {pagesArray.length > 1 ? pagesArray.map((page, index) => currentPage === page ? <span key={index} className="current-page">{page}</span> : <a key={index} className="change-pages" onClick={(event) => selectPage(page, event)}>{page}</a>) : ''}
      {listFiltered.length > (itemsToSkip + n) ? <button onClick={nextPage}>Next</button> : ''}
    </>
  )
}