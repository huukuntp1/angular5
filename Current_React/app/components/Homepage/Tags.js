import React from 'react';

class Tags extends React.Component {
  render() {
    const {
      tags
    } = this.props
    return (
      <div>
        <div className="sidebar">
        <p>Popular Tags</p>
        {
          this.props.tags.map((tag, key)=> {
            return (
              <a
                href=""
                className="tag-default tag-pill"
                key= {key}
              >
                {tag}
              </a>
            )
          })
        }
        </div>
      </div>
    );
  }
}

Tags.propTypes = {

};

export default Tags;
