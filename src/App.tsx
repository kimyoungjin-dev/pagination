import { useState, useEffect } from "react";
import { paginationApi } from "./api";
import Pagination from "./Pagination";
import Posts from "./Posts";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [currentPages, setCurrentPages] = useState(1); //현재페이지수
  const [postPerPages] = useState(10); //한화면에 랜더링할 정보의 갯수

  const getData = async () => {
    try {
      const { data } = await paginationApi();
      setResponse(data);
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const lastPost = currentPages * postPerPages; //10
  const firstPost = lastPost - postPerPages; //0
  const currentPost = response.slice(firstPost, lastPost); //(0~10)

  const paginateFn = (value: number) => setCurrentPages(value);

  return (
    <div>
      <GlobalStyle />
      <Posts loading={loading} response={currentPost} />
      <Pagination
        postPerPage={postPerPages}
        totalPosts={response.length}
        paginateFn={paginateFn}
      />
    </div>
  );
}
