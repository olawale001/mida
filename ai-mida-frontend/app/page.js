// 'use client';

// import { useState, useEffect } from 'react';

// export default function GeneratePage() {
  //   const [text, setText] = useState('');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasNext, setHasNext] = useState(false);

//   const fetchHistory = async (pageNumber = 1) => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const res = await api.get(`/mida_ai/generate-history/?page= ${pageNumber}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//       );
//       setHistory(res.data.results);
//       setHasNext(!!res.data.next);
//       setPage(pageNumber);
//     }catch (err) {
  //       console.error('Failed to load history:', err);
//     }

//     try {
//       const res = await api.get('/mida_ai/generate-history/', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setHistory(res.data);
//     } catch (err) {
//       console.error('Failed to load history:', err);
//     }
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const handleGenerate = async () => {
//     const token = localStorage.getItem('token');
//     if (!token || !text.trim()) return;

//     setLoading(true);
//     try {
//       const res = await api.post(
//         '/nlp/',
//         { text },
//         {
//           headers: {
  //             Authorization: `Bearer ${token}`,
  //             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const newResult = res.data.result;
//       setResult(newResult);
//       setHistory(prev => [res.data, ...prev]); 
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">MIDA AI</h1>
//       <textarea
//         className="w-full p-3 border rounded mb-4"
//         rows={4}
//         placeholder="Enter prompt text..."
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />
//       <button
//         onClick={handleGenerate}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         disabled={loading}
//       >
//         {loading ? 'Generating...' : 'Generate Text'}
//       </button>

//       {result && (
  //         <div className="mt-6 p-4 border rounded bg-gray-100 whitespace-pre-wrap">
  //           <h2 className="font-semibold mb-2">Generated Result:</h2>
//           {result}
//         </div>
//       )}

//       {history.length > 0 && (
//         <div className="mt-10">
//           <h2 className="text-xl font-bold mb-4">History</h2>
//           {history.map((item, idx) => (
//             <div key={idx} className="mb-6 p-4 border rounded bg-white shadow-sm">
//               <p><strong>Prompt:</strong> {item.prompt}</p>
//               <p className="mt-2 whitespace-pre-wrap"><strong>Result:</strong> {item.result}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className='mt-4 flex items-center gap-4'>
//         <button disabled={page === 1} onClick={() => fetchHistory(page -1)} className='px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded'>
//           prev</button>
//         <button disabled={!hasNext} onClick={() => fetchHistory(page + 1)} className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded">
//           Next</button> 

//         <button onClick={async () => {
  //           const token = localStorage.getItem('token');
  //           await api.delete('/clear-history/', {
    //             headers: {
//               Authorization: `Bearer ${token}`
//             },
//           });
//           setHistory([]);
//         }}
//         className="ml-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
//           Clear History</button>   
//       </div>
//     </div>
//   );
// }


'use client'
import { useState } from 'react';
import api from '../lib/api';

export default function NLPPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      const res = await api.post('/nlp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // if using JWT
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Named Entity Recognition (NLP)</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text for NLP processing..."
          className="w-full h-32 p-3 border rounded"
        />
        <button type="submit" className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Results:</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
