import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const dataTable = css`
  table {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    border: 1px solid transparent; /* No more visible border */
    height: 30px;
    transition: all 0.3s; /* Simple transition for hover effect */
    padding: 10px;
  }

  th {
    background: #dfdfdf; /* Darken header a bit */
    font-weight: bold;
  }

  td {
    background: #fafafa;
    text-align: center;
  }

  /* Cells in even rows (2,4,6...) are one color */
  tr:nth-child(even) td {
    background: #f1f1f1;
  }

  /* Cells in odd rows (1,3,5...) are another (excludes header cells)  */
  tr:nth-child(odd) td {
    background: #fefefe;
  }

  tr:hover td {
    background: #666;
    color: #fff;
  }
  /* Hover cell effect! */
`

class DataTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    let rows = []

    this.props.data.forEach(function(item) {
      rows.push(
        <tr>
          <td>{item.yearBuilt}</td>
          <td>{item.region}</td>
          <td>{item.forwardSortationArea}</td>
          <td>{item.houseType}</td>
          <td>{item.eghRating}</td>
        </tr>,
      )
    })

    return (
      <div className={dataTable}>
        <table>
          <thead>
            <tr>
              <th>Year Built</th>
              <th>Region</th>
              <th>ForwardSortationArea</th>
              <th>HouseType</th>
              <th>EghRating</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default DataTable
