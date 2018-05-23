/**
*
* ArticleComponent
*
*/

import React from 'react';
// import styled from 'styled-components';


class ArticleComponent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      tagList: this.props.tags,
      inputTags: ''
    }
  }

  handleChange = (evt) => {
    this.setState({inputTags: evt.target.value});
  }

  onChangeTitle = (evt) => {
    this.setState({ title: evt.target.value})
  }

  onchangeDescription = (evt) => {
    this.setState({ description: evt.target.value})
  }

  onChangeBody = (evt) => {
    this.setState({ body: evt.target.value})
  }

  hanldeKeypress = (evt) => {
    const value = evt.target.value

    if(evt.key === 'Enter') {
      const tagList =  this.state.tagList.slice();

      tagList.push(value);
      this.setState({
        tagList,
        inputTags: '',
        title: '',
        description: '',
        body: ''
      })
    }
  }

  handleClick = () => {
    this.props.createArticle(this.state)
  }

  removeItemTag = (index) => {
    const tagList =  this.state.tagList.slice();

    tagList.splice(index)
    this.setState({
      tagList
    })
  }

  render() {

    const {
      inputTags,
      tagList
    } = this.state

    return (
      <div className = "editor-page">
        <div className = "container page">
          <div className = "row">

            <div className = "col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className = "form-group">
                      <input
                        type="text"
                        className = "form-control form-control-lg"
                        placeholder="Article Title"
                        onChange = { this.onChangeTitle }
                      />
                  </fieldset>
                  <fieldset className = "form-group">
                      <input
                        type="text"
                        className = "form-control"
                        placeholder="What's this article about?"
                        onChange = { this.onchangeDescription }
                      />
                  </fieldset>
                  <fieldset className = "form-group">
                      <textarea
                        className = "form-control"
                        rows="8"
                        placeholder="Write your article (in markdown)"
                        onChange = { this.onChangeBody }
                      >
                      </textarea>
                  </fieldset>
                  <fieldset className = "form-group">
                      <input
                        type="text"
                        className = "form-control"
                        placeholder="Enter tags"
                        onChange = { this.handleChange }
                        onKeyPress = { this.hanldeKeypress }
                        value = { this.state.inputTags }
                      />
                      <div className = "tag-list">
                        {
                          tagList.map((tag, index) => {
                            return (
                              <span
                                className="tag-default tag-pill"
                                key = { tag }
                              >
                                <i
                                  className="ion-close-round"
                                  onClick = { () => this.removeItemTag(index) }
                                ></i>
                                { tag }
                              </span>
                            )
                          })
                        }
                      </div>
                  </fieldset>
                  <button
                    className = "btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick = { this.handleClick }
                  >
                      Publish Article
                  </button>
                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

ArticleComponent.propTypes = {

};

export default ArticleComponent;
