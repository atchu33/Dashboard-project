import { create } from 'zustand';

export const useWidgetStore = create((set) => ({
  categories: {
    'CSPM Executive Dashboard': [],
    'CWPP Dashboard': [],
    'Registry Scan': []
  },
  widgetLibrary: [
    { name: 'Cloud Accounts', content: 'Random text about Cloud Accounts' },
    { name: 'Cloud Account Risk Assessment', content: 'Risk info widget' },
    { name: 'Top 5 Namespace Specific Alerts', content: 'Kubernetes alerts' },
    { name: 'Workload Alerts', content: 'Workload alert details' },
    { name: 'Image Risk Assessment', content: 'Image scan risk' },
    { name: 'Image Security Issues', content: 'Security scan results' }
  ],
  addWidget: (category, widget) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: [...state.categories[category], widget]
      }
    })),
  removeWidget: (category, widgetName) =>
    set((state) => ({
      categories: {
        ...state.categories,
        [category]: state.categories[category].filter((w) => w.name !== widgetName)
      }
    }))
}));