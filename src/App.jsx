import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute';
import NotFound from './pages/NotFound';
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {

  let user = true;

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>

            <Route element={<ProtectRoute user={user} />}>
              <Route path='/' element={<Home />} />
              <Route path='/chat/:chatId' element={<Chat />} />
              <Route path='/group' element={<Groups />} />
            </Route>

            <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login /></ProtectRoute>} />

            <Route path='*' element={<NotFound />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
