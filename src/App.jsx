import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { setOrderFromCookie } from './store/orderSlice';

function App() {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['order']);

  // Sync order if cookie exists on component mount
  useEffect(() => {
    const orderFromCookie = cookies.order;
    if (orderFromCookie) {
      dispatch(setOrderFromCookie(orderFromCookie));
    }
  }, []);

  // Sync cookie every time order changes, save it for 3 hours
  useEffect(() => {
    setCookie('order', order, { maxAge: 60 * 60 * 3 });
  }, [order]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
