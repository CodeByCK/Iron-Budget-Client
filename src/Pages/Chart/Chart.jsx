import React, { Component, Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';


class Chart extends Component {
  render() {

    // this.props.groups.map(group => {
    //   group.items.map(item => {
    //     // console.log(item.planned)
    //     return item.planned
    //   }
    //   )
    // })


    const data = {
      labels: this.props.groups.map(group => group.name),
      datasets: [{
        data: [300, 400, 200, 300], //! NEED AN ARRAY OF TOTAL AMOUNT.PLANNED FROM EACH GROUP HERE-----
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
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
        <Doughnut data={data} />
      </Fragment>
    );
  }
}

export default Chart;
