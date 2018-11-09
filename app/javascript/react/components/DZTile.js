import React from 'react';
import Dropzone from 'react-dropzone';

let DZTile = (props) => {
  return(
    <div className="dzTile">
      <section>
        <div className="file-uploader">
          <Dropzone onDrop={props.onDrop}>
            <label className="interior-text">Drop a file here or click to select a file to upload.</label>
          </Dropzone>
        </div>
      </section>
    </div>
  )
}

export default DZTile;
