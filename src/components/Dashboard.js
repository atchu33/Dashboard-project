import Category from './Category';
import { useWidgetStore } from './WidgetStore';

const Dashboard = () => {
  const { categories } = useWidgetStore();

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {Object.entries(categories).map(([category, widgets]) => (
          <div className="col-md-6 col-xl-4 mb-4" key={category}>
            <Category title={category} widgets={widgets} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;