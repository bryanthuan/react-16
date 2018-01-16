import { customers } from './reducer';

function ascendingSort(customer1, customer2) {
  const name1 = customer1.name ? customer1.name.toUpperCase() : '~';
  const name2 = customer2.name ? customer2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const customerActions = {
  ADD_CUSTOMER: 'ADD_CUSTOMER',
  EDIT_CUSTOMER: 'EDIT_CUSTOMER',
  DELETE__CUSTOMER: 'DELETE__CUSTOMER',
  CHANGE_CUSTOMER: 'CHANGE_CUSTOMER',
  EDIT_VIEW: 'EDIT_VIEW',
  changeCustomer: (id) => ({
    type: customerActions.CHANGE_CUSTOMER,
    id,
  }),
  addCustomer: () => {
    const newCustomer = {
      id: new Date(),
      firstName: '',
      avatar: customers[new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: customerActions.ADD_CUSTOMER,
        customers: [...getState().Customers.get('customers'), newCustomer],
        selectedId: newCustomer.id,
      });
    };
  },
  editCustomer: (newCustomer) => {
    return (dispatch, getState) => {
      const customers = getState().Customers.get('customers');
      const newCustomers = [];
      customers.forEach(customer => {
        if (customer.id === newCustomer.id) {
          newCustomers.push(newCustomer);
        } else {
          newCustomers.push(customer);
        }
      });
      dispatch({
        type: customerActions.EDIT_CUSTOMER,
        customers: newCustomers.sort(ascendingSort),
      });
    }
  },
  deleteCustomer: (id) => {
    return (dispatch, getState) => {
      const customers = getState().Customers.get('customers');
      const seectedId = getState().Customers.get('seectedId');
      const newCustomers = [];
      customers.forEach(customer => {
        if (customer.id === id) {
        } else {
          newCustomers.push(customer);
        }
      });
      dispatch({
        type: customerActions.DELETE__CUSTOMER,
        customers: newCustomers,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: customerActions.EDIT_VIEW,
    view,
  }),
};
export default customerActions;