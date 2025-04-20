import { useWidgetStore } from './WidgetStore';

const getColorClass = (name) => {
  const colorMap = {
    Cloud: 'bg-primary text-white',
    Risk: 'bg-danger text-white',
    Alert: 'bg-warning text-dark',
    Workload: 'bg-info text-white',
    Image: 'bg-success text-white'
  };

  const key = Object.keys(colorMap).find((k) => name.includes(k));
  return colorMap[key] || 'bg-secondary text-white';
};

const Widget = ({ name, content, category }) => {
  const removeWidget = useWidgetStore((s) => s.removeWidget);

  return (
    <div className={`card shadow-sm ${getColorClass(name)} h-100 position-relative`}>
      <div className="card-body">
        <button
          onClick={() => removeWidget(category, name)}
          className="btn-close position-absolute top-0 end-0 m-2"
        />
        <h5 className="card-title">{name}</h5>
        <p className="card-text small">{content}</p>
      </div>
    </div>
  );
};

export default Widget;