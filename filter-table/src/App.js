import React, { Component } from 'react';
import _ from 'lodash'
import ModeSelector from './components/ModeSelector/ModeSelector'
import Loader from './components/Loader/Loader'
import Table from './components/Table/Table'

class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: true,
    data: [],
    sort: 'asc',
    sortField: 'id'
  }
  async fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sortType)
    })
  }

  onSort = sortField => {
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(this.state.data, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelected: true,
    })
    this.fetchData(url)
  }

  render() {
    if(!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeSelectHandler} />
        </div>
      )
    }
    return (
      <div className="container">
        {this.state.isLoading
          ? <Loader />
          : <Table
            data={this.state.data}
            onSort={this.onSort}
            sortField={this.state.sortField}
            sort={this.state.sort}
          />}
      </div>
    );
  }
}

export default App;