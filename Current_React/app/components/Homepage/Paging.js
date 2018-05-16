import React from 'react';

class Paging extends React.Component {
  render() {
    const {
      articlesCount
    } = this.props

    const count = articlesCount ? articlesCount : 0
    const newArray = new Array(Math.round(count / 10));

    const totalPage = Array.from(newArray, (val, index) => index + 1)

    console.log(totalPage)

    console.log(newArray)

    // const totalPage = Array.from(
    //   new Array(
    //     Math.round(articlesCount)
    //   ), val, index => index + 1
    // )

    // console.log(totalPage)
    return (
      <nav>
        <ul className="pagination">
          {

            totalPage.map((val, key) => {
              return (
                <li
                  key = { key }
                >
                  <a className="page-link" href="">{ val }</a>
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
