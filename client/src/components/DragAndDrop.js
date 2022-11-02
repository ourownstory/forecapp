import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { parse } from "papaparse";
import PropTypes from "prop-types";
import doc_upload from "src/assets/images/doc_upload.svg";
import doc_success from "src/assets/images/doc_success.svg";
import doc_error from "src/assets/images/doc_error.svg";
import { CCol, CRow } from "@coreui/react";

const DragAndDrop = ({ paramFunc }) => {
  const [highlighted, setHighlighted] = useState(false);
  const [initData, setInitData] = useState([
    ["ds", "y"],
    ["1949-01-01", "112"],
    ["1949-02-01", "118"],
    ["1949-03-01", "132"],
    ["1949-04-01", "129"],
  ]);

  const dispatch = useDispatch();

  // using an effect here to trigger sending initData to the Parent Component AFTER initData is updated
  useEffect(() => {
    paramFunc(initData);
    console.log("I'M inside the effect");
    console.log("I'M inside the effect");
    console.log(initData);
  }, [dispatch, initData]);

  // File Browser

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    Array.from(event.target.files)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const text = await file.text();
        const result = parse(text, { header: false });
        setInitData(result.data);
      });
  };
  const inputFile = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          cursor: "pointer",
        }}
        className={
          !isFilePicked
            ? highlighted
              ? "drag-drop-active"
              : "drag-drop-default"
            : error
            ? "file-picked-error"
            : "file-picked-border"
        }
        onMouseEnter={(e) => {
          setHighlighted(true);
        }}
        onMouseLeave={(e) => {
          setHighlighted(false);
        }}
        onClick={(e) => {
          onButtonClick();
        }}
        onDragEnter={(e) => {
          setHighlighted(true);
        }}
        onDragLeave={(e) => {
          setHighlighted(false);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();

          if (event.dataTransfer.files.length != 1) {
            setError("Upload only one file at a time");
            return;
          }

          const file = event.dataTransfer.files[0];
          if (
            file.type !== "text/csv" &&
            file.type !==
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ) {
            setError(
              `Must be a CSV or XLSX file. (Uploaded file: ${file.name})`
            );
            return;
          }

          setError(null);
          setSelectedFile(file);
          setHighlighted(false);
          setIsFilePicked(true);

          const loadData = async () => {
            const text = await file.text();
            const result = parse(text, { header: false });
            setInitData(result.data);
          };
          loadData();
        }}
      >
        <input
          type="file"
          id="file"
          className="myInput"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={changeHandler}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              marginBottom: "1rem",
            }}
            src={error ? doc_error : isFilePicked ? doc_success : doc_upload}
            alt="Doc upload image"
            width={100}
            height={100}
          ></img>

          {!error &&
            (isFilePicked ? (
              <p className="dragDropContent">
                Upload successful! Click Button below.
              </p>
            ) : (
              <p className="dragDropContent">
                Drop it right in here <strong>or</strong> click to browse.
              </p>
            ))}

          <p className="dragDropContent">
            <i>
              {error
                ? error
                : isFilePicked
                ? `Filename: ${selectedFile?.name}`
                : "No file selected."}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;

DragAndDrop.propTypes = {
  paramFunc: PropTypes.func,
};
