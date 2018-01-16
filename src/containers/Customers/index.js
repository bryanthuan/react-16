import React, { Component } from 'react';
import { connect } from 'react-redux';
import customerAction from '../../redux/customers/actions';
import { Layout, Icon } from 'antd';
import Button from '../../components/uielements/button';
import CustomerList from '../../components/customers/customerList';
import SingleCustomerView from '../../components/customers/singleView';
import EditCustomerView from '../../components/customers/editView';
import DeleteButton from '../../components/customers/deleteButton';
import { otherAttributes } from './fakeData';
import IntlMessages from '../../components/utility/intlMessages';
import { CustomersWrapper } from './customers.style';

const {
  changeCustomer,
  addCustomer,
  editCustomer,
  deleteCustomer,
  viewChange
} = customerAction;

const { Content } = Layout;
class Customers extends Component {
  render() {
    const {
      customers,
      seectedId,
      editView,
      changeCustomer,
      addCustomer,
      editCustomer,
      deleteCustomer,
      viewChange
    } = this.props;
    const selectedCustomer = seectedId
      ? customers.filter(customer => customer.id === seectedId)[0]
      : null;
    const onVIewChange = () => viewChange(!editView);
    return (
      <CustomersWrapper
        className="isomorphicCustomers"
        style={{ background: 'none' }}
      >
        <div className="isoCustomerListBar">
          <CustomerList
            customers={customers}
            seectedId={seectedId}
            changeCustomer={changeCustomer}
            deleteCustomer={deleteCustomer}
          />
        </div>
        <Layout className="isoCustomerBoxWrapper">
          {selectedCustomer ? (
            <Content className="isoCustomerBox">
              <div className="isoCustomerControl">
                <Button type="button" onClick={onVIewChange}>
                  {editView ? <Icon type="check" /> : <Icon type="edit" />}{' '}
                </Button>
                <DeleteButton
                  deleteCustomer={deleteCustomer}
                  customer={selectedCustomer}
                />
                <Button
                  type="primary"
                  onClick={addCustomer}
                  className="isoAddCustomerBtn"
                >
                  <IntlMessages id="customerlist.addNewCustomer" />
                </Button>
              </div>
              {editView ? (
                <EditCustomerView
                  customer={selectedCustomer}
                  editCustomer={editCustomer}
                  otherAttributes={otherAttributes}
                />
              ) : (
                <SingleCustomerView
                  customer={selectedCustomer}
                  otherAttributes={otherAttributes}
                />
              )}
            </Content>
          ) : (
            <div className="isoCustomerControl">
              <Button
                type="primary"
                onClick={addCustomer}
                className="isoAddCustomerBtn"
              >
                <IntlMessages id="customerlist.addNewCustomer" />
              </Button>
            </div>
          )}
        </Layout>
      </CustomersWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { customers, seectedId, editView } = state.Customers.toJS();
  return {
    customers,
    seectedId,
    editView
  };
}
export default connect(mapStateToProps, {
  changeCustomer,
  addCustomer,
  editCustomer,
  deleteCustomer,
  viewChange
})(Customers);
