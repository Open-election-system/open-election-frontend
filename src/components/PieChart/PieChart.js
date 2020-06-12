import React, {Component} from 'react';
import CanvasJSReact from '../../assests/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Вибори голови ОСББ (вул. Степана Банде...)"
      },
      data: [{
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          {y: 18, label: "Іван Дмитрів"},
          {y: 49, label: "Петро Іванов"},
          {y: 9, label: "Людмила Стегніцька"},
          {y: 5, label: "Андрій Ярошевський"}
        ]
      }]
    };

    return (
      <div>
        <CanvasJSChart options={options}/>
      </div>
    );
  }
}

export default PieChart;