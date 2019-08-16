import React, { Component } from "react";
import api from "../services/api";

import "./New.css";
export default class New extends Component {
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };
  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", this.state.image);
    data.append("author", this.state.author);
    data.append("place", this.state.place);
    data.append("description", this.state.description);
    data.append("hashtags", this.state.hashtags);

    await api.post("posts", data);

    this.props.history.push("/");
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form action="" id="new-post" onSubmit={this.handleSubmit}>
        <input
          type="file"
          onChange={this.handleImageChange}
          id="file"
          className="file"
        />
        <label htmlFor="file">Escolher arquivo</label>

        <input
          type="text"
          onChange={this.handleChange}
          name="author"
          value={this.state.author}
          placeholder="Autor do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="place"
          value={this.state.place}
          placeholder="Local do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="description"
          value={this.state.description}
          placeholder="Descrição do post"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="hashtags"
          value={this.state.hashtags}
          placeholder="Hashtags do post"
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
