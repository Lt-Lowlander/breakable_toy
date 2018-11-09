import React from 'react';
import Dropzone from 'react-dropzone';

let DZTile = (props) => {
  return(
    <div>
      <section>
        <div className="dropzone">
          <Dropzone onDrop={props.onDrop}>
            <p>Drop a file here or click to select a file to upload.</p>
          </Dropzone>
        </div>
      </section>
    </div>
  )
}

export default DZTile;
