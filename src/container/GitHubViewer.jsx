import React, { Component } from 'react';
import Controls from '../../components/Controls/Controls';
import Detail from '../../components/Detail/Detail';
import { fetchUserDetail, fetchUserRepos } from '../../services/github';
import Repos from '../../components/Repos/Repos';

export default class GitHubViewer extends Component {
  state = {
    username: '',
    detail: null,
    repos: [],
    loading: false
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ loading: true });
    Promise.all([
      fetchUserDetail(this.state.username),
      fetchUserRepos(this.state.username)
    ])
      .then(([detail, repos]) => this.setState({ detail, repos, loading: false }));
  }

  render() {
    const { username, detail, repos, loading } = this.state;
    if(loading) return <h1>Loading</h1>;

    return (
      <>
        <Controls text={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        {detail && <Detail {...detail} />}
        <Repos repos={repos} />
      </>
    );
  }
}
