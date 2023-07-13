import PropTypes from 'prop-types';
import {TransactionTable, TransactionTableHead, TransactionTableBodyContent, TransactionTableCell} from './TransactionHistory.styled'


 export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTableHead>Type</TransactionTableHead>
          <TransactionTableHead>Amount</TransactionTableHead>
          <TransactionTableHead>Currency</TransactionTableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionTableBodyContent key={item.id}>
              <TransactionTableCell>{item.type}</TransactionTableCell>
              <TransactionTableCell>{item.amount}</TransactionTableCell>
              <TransactionTableCell>{item.currency}</TransactionTableCell>
            </TransactionTableBodyContent>
          )
        })}
    
      </tbody>
    </TransactionTable>

  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}



