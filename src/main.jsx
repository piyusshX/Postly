import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import  { AuthLayout, Login } from './components/index.js'
import { Home, Signup, AddPost, AllPosts, EditPost, Post } from './pages/index.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route 
        path='/login' 
        element={
          <AuthLayout authentication={false}> 
            <Login /> 
          </AuthLayout>
        } 
      />
      <Route 
        path='/signup' 
        element={
          <AuthLayout authentication={false}> 
            <Signup /> 
          </AuthLayout>
        } 
      />
      <Route 
        path="/all-posts" 
        element={
          <AuthLayout authentication> 
            {" "}
            <AllPosts /> 
          </AuthLayout>
        } 
      />
      <Route 
        path="/add-post" 
        element={
          <AuthLayout authentication> 
            {" "}
            <AddPost /> 
          </AuthLayout>
        } 
      />
      <Route 
        path="/edit-post/:slug"
        element={
          <AuthLayout authentication> 
            {" "}
            <EditPost /> 
          </AuthLayout>
        } 
      />
      <Route path="/post/:slug" element={<Post />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
