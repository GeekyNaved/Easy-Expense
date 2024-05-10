// Donut chart - to show spendings (expenses)
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import {dummyCategoryWithTotalAmount} from "../DummyData/dummyTransaction";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: dummyCategoryWithTotalAmount.map((data) => data.label),
  datasets: [
    {
      label: "Spend",
      data: dummyCategoryWithTotalAmount.map((data) => data.value),
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
export const CustDonutChart: React.FC = () => {
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
