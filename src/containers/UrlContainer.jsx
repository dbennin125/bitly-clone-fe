import React, { useEffect, useState } from 'react';
import { AddUrlForm } from '../components/form/AddUrlForm';
import { UrlList } from '../components/url/UrlList';
import { createNewUrl, getUrlList } from '../fetchs/shrink-api';

export const UrlContainer = () => {
  const [url, setUrl] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
    

  useEffect(() => {
    setLoading(true);
    getUrlList()
      .then(urls => setList(urls))
      .then(() => setLoading(false));

      
  }, []);
  
  const handleSubmit = event => {
    event.preventDefault();
    if(!url) return; 
    setLoading(true);
    createNewUrl(url)
      .then(newLink => setList(links => [...links, newLink]))
      .then(() => setLoading(false));
  };

  return (
    <>
      {
        loading 
          ?  <h2>loading...</h2>
          : 
          <>
            <AddUrlForm 
              url={url}
              onChange={({ target }) => setUrl(target.value)}
              onSubmit={handleSubmit}
            />
            <UrlList list={list}/>
          </> 
      }
      
    </>
  );
};
