import "./App.css";
import { useAxios } from "./hooks";

interface PostResponse {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const { error, loading, response } = useAxios<PostResponse[]>({
    method: "get",
    url: "posts",
  });

  if (loading) return <div className="App">Loading</div>;
  if (error) return <div className="App">ERROR : {error}</div>;

  return (
    <div className="App">
      {response?.length && (
        <>
          {response!.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
