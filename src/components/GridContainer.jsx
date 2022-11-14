import React from 'react'
import BaseDirectories from '../base directories/BaseDirectories'

const GridContainer = () => {
  return (
    <div>
        <div className="box-grid">
          <div className="grid1">
            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/grid1.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/grid2.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-pen"> Peniel Day Foundation </div>
            </div>
            <div className="image">
              <div className="image-penlogo">
                {" "}
                <img src={`${BaseDirectories.IMAGES_DIR}/logo2.png`} alt="Peniel Day" /> Peniel Day Foundation{" "}
              </div>
            </div>

            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/homegrid5.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/homegrid11.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/grid4.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              {" "}
              <img src={`${BaseDirectories.IMAGES_DIR}/homegrid6.jpg`} alt="Peniel Day" />{" "}
            </div>
            <div className="image">
              <div className="image-logoo">
                {" "}
                <img src={`${BaseDirectories.IMAGES_DIR}/logo.png`} alt="Peniel Day" />{" "}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GridContainer