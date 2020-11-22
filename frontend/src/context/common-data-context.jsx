import React, { createContext } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CommonDataContext = createContext({});

const CommonDataProvider = ({
  children,
}) => {

  const contextData = {
    user: "afsfasfasfa",
  };

  return (
    <CommonDataContext.Provider value={contextData}>
      {children}
    </CommonDataContext.Provider>
  );
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

const EnchancedCommonDataProvider = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonDataProvider);

export { EnchancedCommonDataProvider as CommonDataProvider, CommonDataContext };
