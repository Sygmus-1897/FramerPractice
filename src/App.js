import { Route, Switch } from 'react-router-dom';
import CardGallery from "./components/CardGallery";
import DumDum from "./components/DumDum";

function App() {
  return (
    <Switch>
      <Route path="/cardGallery" render={CardGallery} />
      <Route exact path="/" render={DumDum} />
    </Switch>
  );
}

export default App;
