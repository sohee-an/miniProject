import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Layout from './components/layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div>hello</div>
    </Layout>
  );
}

export default App;
