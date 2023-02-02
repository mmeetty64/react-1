import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextWrapper } from '../../Context/ContextWrapper';
import { Layout } from '../Component/HOCS/Layout';
import { Post } from '../Component/Post';

const App = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)
  
  return (
    <ContextWrapper>
      <Layout>
        <Post/>
      </Layout>
    </ContextWrapper>
  );
}

export default App;
