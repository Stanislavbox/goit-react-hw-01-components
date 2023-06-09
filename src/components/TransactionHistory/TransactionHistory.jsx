import PropTypes from 'prop-types';

import {TransactionTable} from './TransactionHistory.styled'

const TransactionHistory = ({items}) => {
  return(
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => {
          return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>)
        })}
      </tbody>
    </TransactionTable>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  )
};

export default TransactionHistory