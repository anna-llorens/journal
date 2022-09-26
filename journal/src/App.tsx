import { ArticleList } from "./components/article-list/ArticleList";
import { Header } from "./components/header/Header";
import './App.scss';
import { ArticlePreview } from "./components/article-preview/ArticlePreview";

const App = () =>
  <>
    <Header />
    <div className='app'>
      <ArticleList />
      <ArticlePreview />
    </div>
  </>

export default App;