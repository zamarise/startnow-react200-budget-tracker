import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    description: store.income.description,
    amount: store.income.amount,
    lineItems: store.income.lineItems
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(IncomeEntries);
