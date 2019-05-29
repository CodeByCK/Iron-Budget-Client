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
          '#9A3AA7',
          '#C948BE',
          '#EA5489',
          '#FF675B',// ! Colors 
          '#FFA45B',
          '#FFC85B',
          '#FFDD5B',
          '#FFFE5B',
          '#BDF357',
          '#4FDD4F',
          '#45C0AF',
          '#5282C6',
          '#6D58CB',
          '#9250C8',
          '#F8443A',
          '#016065',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }],
    }

    const options = {

      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'PLANNED BUDGET',
      }
    }


    return (
      <Fragment>
        <Doughnut
          data={data} options={options}
          width={83}
          height={50}
        />
      </Fragment>
    );
  }
}

export default Chart;
