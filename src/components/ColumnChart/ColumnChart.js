import React, {Component} from 'react';
import CanvasJSReact from '../../assests/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  render() {
    const options = {
      title: {
        text: "Вибори голови ОСББ (вул. Степана Банде...)"
      },
      animationEnabled: true,
      data: [
        {
          type: "column",
          dataPoints: [
            {y: 18, label: "Іван Дмитрів"},
            {y: 49, label: "Петро Іванов"},
            {y: 9, label: "Людмила Стегніцька"},
            {y: 5, label: "Андрій Ярошевський"}
          ]
        }
      ]
    };

    return (<CanvasJSChart options={options}/>);
  }
}

export default ColumnChart;