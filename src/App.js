import { useRef, useState } from 'react';
import './App.css';
import SortList from './components/sort_list';
import TicketsList from './components/ticket_list';

function App() {
  const [curTransf,setcurTransf] = useState(5)


  return (
    <div className="App">
      <SortList
          currentTransf={(val) => setcurTransf(val)}
          tranfers={[
            {
              name:'Все',
              value: 5,
              check: 'checked'
            },
            {
              name:'Без пересадок',
              value: 0
            },
            {
              name:'1 пересадка',
              value: 1
            },
            {
              name:'2 пересадки',
              value: 2
            },
            {
              name:'3 пересадки',
              value: 3
            }
          ]}
      />
      <TicketsList
        curTransf={curTransf}
      />
    </div>
  );
}

export default App;
