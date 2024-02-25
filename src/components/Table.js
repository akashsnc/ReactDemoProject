import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table>
        <thead>
            <tr>
                <td>FirstName</td>
                <td>LastName</td>
            </tr>
        </thead>
        <tbody>
            <Column/>
        </tbody>
    </table>
  )
}

export default Table