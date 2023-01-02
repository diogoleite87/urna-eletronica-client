import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StateRepresentative from './pages/StateRepresentative'
import Final from './pages/Final'
import Congressman from './pages/Congressman'
import Senator from './pages/Senator'
import Governor from './pages/Governor'
import President from './pages/President'

export function Router() {

    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<StateRepresentative />} path="/state" />
            <Route element={<Congressman />} path="/congressman" />
            <Route element={<Senator />} path="/senator" />
            <Route element={<Governor />} path="/governor" />
            <Route element={<President />} path="/president" />
            <Route element={<Final />} path="/end" />

        </Routes>
    )
}