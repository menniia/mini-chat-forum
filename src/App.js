import './App.css';
import { comments } from './commentData/commentData';
import Card from './components/card';

function App() {
  return (
    <div>
      {
        comments.map(comment => (
          <Card commentObject={comment} />
        ))
      }
    </div>
  );
}

export default App;
