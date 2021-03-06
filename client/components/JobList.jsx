import React, { PropTypes } from 'react'
import JobItem from './JobItem'

const JobList = ({ jobs }) => (
  <table id="datatables" className="table table-striped table-no-bordered table-hover dataTable dtr-inline scroll-inner" cellSpacing="0" width="100%" style={{'width': '100%'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>State</th>
        <th>Duration</th>
        <th>Created At</th>
        <th>Ended At</th>
        <th className="disabled-sorting text-right">Actions</th>
      </tr>
    </thead>
    {/*<tfoot>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>State</th>
        <th>Duration</th>
        <th>Created At</th>
        <th>Ended At</th>
        <th className="text-right">Actions</th>
      </tr>
    </tfoot>*/}
    <tbody> 
      {jobs.map( (job, index) =>
          <JobItem key={index} job={job} index={index} ></JobItem>
      )}
    </tbody>
  </table>
)

JobList.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default JobList