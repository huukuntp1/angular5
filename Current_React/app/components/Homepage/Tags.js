import React from 'react';

class Tags extends React.Component {
  render() {
    const {
      tags,
      filterTags
    } = this.props

    return (
      <div>
        <div className="sidebar">
        <p>Popular Tags</p>
        {
          this.props.tags.map((tag, key)=> {
            const onClickTag = evt => {
              evt.preventDefault();

              filterTags(tag)
            }

            return (
              <a
                href=""
                className="tag-default tag-pill"
                key= {key}
                onClick = { onClickTag }
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
