import { useWidgetStore } from './WidgetStore';
import { useState } from 'react';

const AddWidgetModal = ({ category, close }) => {
  const allWidgets = useWidgetStore((s) => s.widgetLibrary);
  const addWidget = useWidgetStore((s) => s.addWidget);
  const existing = useWidgetStore((s) => s.categories[category]);
  const [search, setSearch] = useState('');

  const filtered = allWidgets.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) &&
      !existing.find((e) => e.name === w.name)
  );

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Add Widget to {category}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={close}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search widgets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filtered.map((widget) => (
              <div
                key={widget.name}
                className="d-flex justify-content-between align-items-center border p-2 mb-2 rounded"
              >
                <span>{widget.name}</span>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => {
                    addWidget(category, widget);
                    close();
                  }}
                >
                  Add
                </button>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;