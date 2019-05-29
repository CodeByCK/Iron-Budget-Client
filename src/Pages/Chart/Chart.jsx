import React, { Component, Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Chart extends Component {




  getTotals = () => {
    let groupTotal = []
    this.props.groups.map((group, i) => {
      groupTotal[i] = groupTotal[i] ? groupTotal[i] : 0;
      group.items.map(item => {
        groupTotal[i] += item.planned
      })
    })
    return groupTotal
  }




  render() {
    const data = {
      labels: this.props.groups.map(group => group.name),
      datasets: [{
        data: this.getTotals(),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6656',
          '#FFA75B',
          '#44C94C',
          '#9A3AA7'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    return (
      <Fragment>
        <Doughnut
          data={data}
        />
      </Fragment>
    );
  }
}

export default Chart;
