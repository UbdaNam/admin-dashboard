import AreaChartBox from '../../components/areaChartBox/AreaChartBox';
import BarChartBox from '../../components/barChart/BarChart';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/pieChart/PieChart';
import TopDeals from '../../components/topDeals/TopDeals';
import chartUser, {
  barChartRevenueData,
  barChartVisitData,
} from '../../mock/chart-data';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopDeals />
      </div>
      <div className='box box2'>
        <ChartBox chartData={chartUser[0]} title='Total Users' />
      </div>
      <div className='box box3'>
        <ChartBox chartData={chartUser[1]} title='Total Products' />
      </div>
      <div className='box box4'>
        <PieChartBox />
      </div>
      <div className='box box5'>
        <ChartBox chartData={chartUser[2]} title='Total Ratio' />
      </div>
      <div className='box box6'>
        <ChartBox chartData={chartUser[3]} title='Total Revenue' />
      </div>
      <div className='box box7'>
        <AreaChartBox />
      </div>
      <div className='box box8'>
        <BarChartBox chartData={barChartRevenueData} />
      </div>
      <div className='box box9'>
        <BarChartBox chartData={barChartVisitData} />
      </div>
    </div>
  );
};

export default Home;
