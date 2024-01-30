import react from 'react';
import News from '../News/news';
import Post from '../Post/post';
import Comunity from '../User/comunity';

const Home = () => {
    return (
        <>
          <header>
            <News />
          </header>
          <main>
            <div className='Post'>
              <Post />
            </div>
            <div className='comunity-all'>
              <Comunity  />
            </div>
          </main>
        </>
    )
}

export default Home;