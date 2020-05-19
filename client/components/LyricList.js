import React, { Component } from "react";

class LyricList extends Component {
    onLike(id) {
      console.log(id)
  }
  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map((l) => {
          return (
            <li key={l.id} className="collection-item">
              {l.content}
              <i className="material-icons" onClick={() => this.onLike(l.id)}>
                thumb_up
              </i>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LyricList;
