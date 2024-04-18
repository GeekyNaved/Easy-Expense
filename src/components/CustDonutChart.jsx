// Donut chart - to show spendings (expenses)
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyData = [
  {
    label: "Food",
    value: 2500,
  },
  {
    label: "Bills",
    value: 1100,
  },
  {
    label: "Mutual Funds",
    value: 11000,
  },
  {
    label: "Shopping",
    value: 4500,
  },
];

const data = {
  labels: dummyData.map((data) => data.label),
  datasets: [
    {
      label: "Spend",
      data: dummyData.map((data) => data.value),
      backgroundColor: [
        "rgba(43, 63, 229, 0.8)",
        "rgba(250, 192, 19, 0.8)",
        "rgba(253, 135, 135, 0.8)",
      ],
      borderColor: [
        "rgba(43, 63, 229, 0.8)",
        "rgba(250, 192, 19, 0.8)",
        "rgba(253, 135, 135, 0.8)",
      ],
    },
  ],
};
export const CustDonutChart = () => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          title: {
            text: "My Spendings",
          },
        },
      }}
    />
  );
};
