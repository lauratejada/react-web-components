import './style/index.css';
//import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const arrayImages = [
  { 
    "id" : 101,
    "url" : "https://images.unsplash.com/photo-1543269665-7821011040ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  { 
    "id" : 102,
    "url" : "https://images.unsplash.com/photo-1588601515608-6a6814976b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  { 
    "id" : 103,
    "url" : "https://images.unsplash.com/photo-1545184180-25d471fe75eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  { 
    "id" : 104,
    "url" : "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  }

];

function App() {
  return (
    <><main>
        <Banner title='Designing awesome brands & experiences' text='We are located in Winnipeg. We provide excellent brand design and digital design.' />
        <Gallery images={arrayImages} />
      </main>
      <Footer /></>
  );
}

export default App;
