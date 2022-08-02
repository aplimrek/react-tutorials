import "./App.css";
import { useAxios, useConnection, usePortal } from "./hooks";
import PrimaryModal from "./modals/PrimaryModal";

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

  const connection = useConnection();
  const { openPortal, closePortal, isOpen, Portal } = usePortal();

  if (loading) return <div className="App">Loading</div>;
  if (error) return <div className="App">ERROR : {error}</div>;

  return (
    <div className="App">
      <p>Network Status : {connection ? "ONLINE" : "OFFLINE"}</p>
      <button onClick={openPortal}>Open Portal</button>

      {response?.length && (
        <>
          {response!.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>
      )}
      {isOpen && (
        <Portal>
          <PrimaryModal closePortal={closePortal} />
        </Portal>
      )}
    </div>
  );
}

export default App;
