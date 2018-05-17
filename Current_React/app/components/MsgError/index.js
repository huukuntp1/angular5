/**
*
* MsgError
*
*/

import React from 'react';
// import styled from 'styled-components';


class MsgError extends React.Component {
  render() {
    const {
      msgError
    } = this.props

    return (
      <div>
        {msgError}
      </div>
    );
  }
}

MsgError.propTypes = {

};

export default MsgError;
