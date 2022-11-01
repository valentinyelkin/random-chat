import { useRouter } from 'next/router';
import Navbar from '../NavBar/NavBar';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
      {!router.pathname.includes('login') && !router.pathname.includes('register')? (
        <>
          <Navbar />
          <div style={{ padding: '40px', marginBottom: '40px' }}>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
