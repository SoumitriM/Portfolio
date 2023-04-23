import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'
import './education.scss';
const Education = () => {
  const title="Career Timeline"
  return (
    <Fragment>
      <SectionHeader title={title}/>
      <div class="design-section">
        <div class="timeline">
          <div class="timeline-empty">
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
            <h3>Worked at Cognizant</h3>
            <p>As a Frontend developer from Nov '22 till May '23'</p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>B.Tech in CSE</h3>
            <p>From University of Calcutta from 2017 till 2020</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty">
          </div>

          <div class="timeline-empty">
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3>B.Sc in Physics</h3>
            <p>Completed graduation fron University of Calcutta </p>
          </div>

        </div>
      </div>
    </Fragment >
  )
}

export default Education;
