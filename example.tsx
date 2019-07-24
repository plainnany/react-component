import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IconExample from './examples/icon.example'
import ButtonExample from './examples/button.example'

ReactDOM.render(
  <div>
    <Router>
      <header>
        <div className="logo">logooo</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <div>
            <Link to="/icon">icon</Link>
          </div>
          <div>
            <Link to="/button">button</Link>
          </div>
        </aside>
        <main>
          <Switch>
            <Route path="/icon" exact component={ IconExample } />
            <Route path="/button" component={ ButtonExample } />
          </Switch>
        </main>
      </div>
    </Router>

  </div>
  , document.querySelector('#root'))