import React, { useState, useContext, useEffect } from 'react';
import { Button, Box } from '@mui/material/';
import { SettingsContext } from '../../context/settings/context';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Auth from '../auth';
import './list.scss';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function List({ list, toggleComplete, deleteItem }) {

  const context = useContext(SettingsContext)
  const n = context.itemsPerPage;
  const [startIndex, setStartIndex] = useState(0);
  const [listToDisplay, setListToDisplay] = useState([]);
  const [pagesArr, setPagesArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    refreshDisplay('stay')
  }, [list, startIndex])

  useEffect(() => {
    setStartIndex(0);
    refreshDisplay('startover');
  }, [n])

  function refreshDisplay(command) {
    let temp = [];
    for (let i = 0; i < list.length / n; i++) {
      temp.push(i + 1);
    }
    setPagesArray(temp);

    let visibleList = list.slice(startIndex, startIndex + n);
    if (visibleList.length === 0 && list.length) {
      turnPage(startIndex - n)
    }
    if (command === 'startover') turnPage(0)
    setListToDisplay(visibleList);
  }

  function turnPage(newStartIndex) {
    setStartIndex(newStartIndex)
    setCurrentPage(newStartIndex / n + 1)
  }

  return (
    <>
      <div className='results' >
        {listToDisplay.map((item, i) => {
          return <div key={i}>
            <div className='item-delete'>
              <p>{item.text}</p>
              <Auth capability='delete'>
                <Button color="error" size="small" onClick={() => deleteItem(item.id)}>X</Button>
              </Auth>
            </div>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <Auth capability='update'>
              <button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</button>
            </Auth>
            <hr />
          </div>
        })}
      </div>
      {/* {startIndex > 0 ? <button onClick={() => { turnPage(startIndex - n) }}>Previous</button> : ''}
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {pagesArr.map(((num, i) =>
          <Button key={i} value={num} onClick={() => { turnPage(i * n) }}>{num}</Button>
        ))}
      </ButtonGroup>
      {list.length > (startIndex + n) ? <button onClick={() => { turnPage(startIndex + n) }}>Next</button> : ''} */}
      <Box alignSelf='center'>

        {list.length === 0 ? '' : <Stack spacing={2}>
          <Pagination sx={{ margin: 'auto' }} count={pagesArr.length} page={currentPage} onChange={(e, value) => { turnPage((value - 1) * n) }} />
        </Stack>}
      </Box>
    </>
  )
}