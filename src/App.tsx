import { useState } from 'react'
import { Route, Routes, Router, Location } from 'react-router-dom'

import { Study } from './pages/Study'
import { Section } from './components/Section'

import { MemoryHistory, BrowserHistory } from 'history'
import { Course } from './pages/Course'

interface IAppProps {
  history: BrowserHistory | MemoryHistory
  location: Location
}

export const App = ({ location, history }: IAppProps) => {
  const [isolationLocation, setIsolationLocation] = useState(history.location)

  if (!location)
    history.listen(({ location }) => setIsolationLocation(location))

  return (
    <Router location={location || isolationLocation} navigator={history}>
      <Routes>
        <Route path='/study/course' element={<Course />} />
        <Route path='/study' element={<Study />} />
        <Route path='/' element={<Section />} />
      </Routes>
    </Router>
  )
}
