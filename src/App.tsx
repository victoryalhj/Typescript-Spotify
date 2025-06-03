import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import LoadingSpinner from './common/components/LoadingSpinner';

const AppLayout = React.lazy(()=>import('./layout/AppLayout'))
const HomePage = React.lazy(()=>import('./pages/HomePage/HomePage'))
const SearchPage = React.lazy(()=>import('./pages/SearchPage/SearchPage'))
const SearchWithKeywordPage = React.lazy(()=>import('./pages/SearchWithKeywordPage/SearchWithKeywordPage'))
const PlaylistDetailPage = React.lazy(()=>import('./pages/PlaylistDetailPage/PlaylistDetailPage'))
const PlaylistPage = React.lazy(()=>import('./pages/PlaylistPage/PlaylistPage'))

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=> setLoading(false),3000);
    return () => clearTimeout(timer);
  },[]);

  if (loading) {
    return <LoadingSpinner/>
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<PlaylistDetailPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
