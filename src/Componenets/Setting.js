import React from 'react';
import "./Setting.css";
import img from '../Assets/images/sidebar/line.png';

function Setting() {
  return (
    <>
      <section className='Setting__section'>
        <div className='section__header'>
          <div className='Section__heading'>
            <h6>Setting</h6>
          </div>
        </div>
        <div className='Setting__storage'>
          <h5>Storage</h5>

          <div className='Setting__sub_sec'>
            <img src={img} alt="" />
            <p>1.97 GB of 15 GB used </p>
            <button>Buy Storage</button>
            <small>view items taking up storage</small>
          </div>
        </div>

        <div className='convert__upload'>
          <div className='convert__upload__sub'>
            <h6>Converts Uploads</h6>
            <div className='checkbox__convert'>
              <input type="checkbox" id="upload__checkbox" name="checkbox" value="checkbox" />
              <span className='convert__uploadspan'>Converts Uploads to Docs editor format</span>
            </div>
          </div>
        </div>

        <div className='convert__upload'>
          <div className='convert__upload__sub'>
            <h6>Language</h6>
            <div>
              <span className='convert__uploadspan'>Change language settings</span>
            </div>
          </div>
        </div>

        <div className='convert__upload'>
          <div className='convert__upload__sub'>
            <h6>Offline</h6>
            <div>
              <input type="checkbox" id="upload__checkbox" name="checkbox" value="checkbox" /><span className='convert__uploadspan'>Create, open and edit your recent Docs,
                Sheets, and Sliders files on this devise while offline not recommended on public ro shared computers
              </span>
            </div>
          </div>
        </div>

        <div className='convert__upload'>
          <div className='convert__upload__sub'>
            <h6>Density</h6>
            <div className='setting__radiobtn'>
              <label><input type="radio" name="radio"/><small id="radiobtn__text">Comfortable</small></label>
              <label><input type="radio" name="radio" /><small id="radiobtn__text">Cozy</small> </label>
              <label><input type="radio" name="radio" /><small id="radiobtn__text">Compact</small> </label>
            </div>
          </div>
        </div>

        <div className='convert__upload'>
          <div className='convert__upload__sub'>
            <h6>Suggested files</h6>
            <div>
              <input type="checkbox" id="upload__checkbox" name="checkbox" value="checkbox" />
              <span className='convert__uploadspan'>Show suggested files in My Drive </span><br />
              <input type="checkbox" id="upload__checkbox" name="checkbox" value="checkbox" />
              <span className='convert__uploadspan'>Show suggested files in shared with me (page refresh requirewd) </span>

            </div>
          </div>
        </div>

      </section>
    </>

  )
}

export default Setting
