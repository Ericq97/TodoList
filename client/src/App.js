import Todolists from './router/todolists.js';
import Todoitems from './router/show.js';
import ItemForm from './router/edititem.js';
import NewItem from './router/newitem.js';
import ListForm from './router/newlist.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Todolists} />
       <Route path="/todolists/:id" exact component={Todoitems}/>
        <Route path="/todolists/item/edit/:id" exact component={ItemForm}/>
        <Route path="/todolists/newitem/:id" exact component={NewItem}/>
        <Route path="/newtodolist" exact component={ListForm}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
