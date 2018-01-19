import React, {Component} from 'react';








class Author extends Component {
  render () {
    const allAuthors = this.props.authors.map(a => {
      return <p key={a}><em>By {a}</em></p>
    });
    return (
      <div>{allAuthors}</div>
    )
  }
}







export default Author;
