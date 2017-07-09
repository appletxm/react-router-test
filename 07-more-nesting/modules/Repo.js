import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <span>userName:<b>{this.props.params.userName}</b> repoName:<b>{this.props.params.repoName}</b></span>
      </div>
    )
  }
})
