import * as Toast from '@radix-ui/react-toast';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import References from './components/References';

export default function Home() {
  return (
    <Toast.Provider swipeDirection="right">
      <div className="min-h-screen p-5">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-gray-50 p-8 border-r border-gray-200">
              <Profile />
              <Skills />
            </div>
            <div className="p-8">
              <Education />
              <Experience />
              <Contact />
              <References />
            </div>
          </div>
        </div>
      </div>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
}
