import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { useState } from 'react';

const Category = ({ title, widgets }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card shadow border-0">
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <button className="btn btn-sm btn-outline-light" onClick={() => setOpen(true)}>
          + Add Widget
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          {widgets.map((widget) => (
            <div className="col-12 mb-3" key={widget.name}>
              <Widget category={title} {...widget} />
            </div>
          ))}
        </div>
      </div>
      {open && <AddWidgetModal category={title} close={() => setOpen(false)} />}
    </div>
  );
};

export default Category;