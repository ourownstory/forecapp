import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { parse } from 'papaparse'
import PropTypes from 'prop-types'
import doc_upload from 'src/assets/images/doc_upload.svg'
import { CCol, CRow } from '@coreui/react'

const DragAndDrop = ({ paramFunc }) => {
  const [highlighted, setHighlighted] = useState(false)
  const [initData, setInitData] = useState([
    ['ds', 'y'],
    ['1949-01-01', '112'],
    ['1949-02-01', '118'],
    ['1949-03-01', '132'],
    ['1949-04-01', '129'],
  ])

  const dispatch = useDispatch()

  // using an effect here to trigger sending initData to the Parent Component AFTER initData is updated
  useEffect(() => {
    paramFunc(initData)
    console.log("I'M inside the effect")
    console.log("I'M inside the effect")
    console.log(initData)
  }, [dispatch, initData])

  // File Browser

  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    event.preventDefault()
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
    Array.from(event.target.files)
      .filter((file) => file.type === 'text/csv')
      .forEach(async (file) => {
        const text = await file.text()
        const result = parse(text, { header: false })
        setInitData(result.data)
      })
  }
  const inputFile = useRef(null)

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click()
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          cursor: 'pointer',
        }}
        className={highlighted ? 'drag-drop-active' : 'drag-drop-default'}
        onClick={(e) => {
          onButtonClick()
        }}
        onDragEnter={(e) => {
          setHighlighted(true)
        }}
        onDragLeave={(e) => {
          setHighlighted(false)
        }}
        onDragOver={(event) => {
          event.preventDefault()
        }}
        onDrop={(event) => {
          event.preventDefault()
          setHighlighted(false)
          setIsFilePicked(true)
          setSelectedFile(event.dataTransfer.files[0])
          Array.from(event.dataTransfer.files)
            .filter((file) => file.type === 'text/csv')
            .forEach(async (file) => {
              const text = await file.text()
              const result = parse(text, { header: false })
              setInitData(result.data)
            })
        }}
      >
        <input
          type="file"
          id="file"
          className="myInput"
          ref={inputFile}
          style={{ display: 'none' }}
          onChange={changeHandler}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              paddingBottom: '1rem',
            }}
            src={doc_upload}
            alt="Doc upload image"
            width={100}
            height={100}
          ></img>

          <p className="dragDropContent">
            Drop it right in here <strong>or</strong> click to browse.
          </p>
          {isFilePicked ? (
            <p className="dragDropContent">Filename: {selectedFile.name}</p>
          ) : (
            <p className="dragDropContent">
              <i>No file selected.</i>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DragAndDrop

DragAndDrop.propTypes = {
  paramFunc: PropTypes.func,
}
