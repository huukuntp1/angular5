import React from 'react';

import {
  CONFIG
} from '../../utils/config'

class Paging extends React.Component {
  render() {
    const {
      articlesCount,
      currentPage,
      goPage
    } = this.props

    const {
      limit
    } = CONFIG

    const totalPage = Array.from(
      new Array(Math.round(articlesCount / limit)), (val,index) => index
    )

    return (
      <nav>
        <ul className="pagination">
          {

            totalPage.map((val, index) => {
              const isCurrent = val === currentPage;

              const onClickPaging = (evt) => {
                evt.preventDefault();

                const offset = index * 10
                console.log(currentPage)
                goPage(offset)
              }
              return (
                <li
                  className ={
                    isCurrent ? "page-item active" : "page-item"
                  }
                  key = { index }
                  onClick = { onClickPaging }
                >
                  <a className="page-link" href="">{ val + 1 }</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

Paging.propTypes = {

};

export default Paging;
