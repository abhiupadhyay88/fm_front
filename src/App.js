import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import FacilityFormView from './containers/FacilityForm';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <FacilityFormView />
      </CustomLayout>
    </div>
  );
}

export default App;
