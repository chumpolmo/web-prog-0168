import { useState, useEffect } from 'react';

export default function MyTermProject() {
  const [books, setBooks] = useState(1);
  const [bookInfo, setBookInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function startFetching() {
      setBookInfo([]);
      const result = await fetch('/data/books.json');
      alert(JSON.stringify(result));
      if (!ignore) {
        setBookInfo(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [books]);

  if (loading) {
    return <div>กำลังโหลด...</div>;
  }

  if (!books) {
    return <div>ไม่พบข้อมูลหนังสือ</div>;
  }

  return (
    <>
      <select value={books} onChange={e => {
        setBooks(e.target.value);
      }}>
        <option value="1">Web Programming</option>
        <option value="2">Web Technology</option>
      </select>
      <hr />
      <p><i>{bookInfo ?? 'Loading...'}</i></p>
    </>
  );
}
