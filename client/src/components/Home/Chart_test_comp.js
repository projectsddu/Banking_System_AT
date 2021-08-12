import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

const ChartContainer = () => (
    <Chart>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem type="verticalLine" data={[1, 2, 3, 5]} />
            <ChartSeriesItem type="verticalLine" data={[-1, -2, -3, -5]} />
        </ChartSeries>
    </Chart>
);


export default ChartContainer