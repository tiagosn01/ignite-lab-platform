import { gql, useQuery } from "@apollo/client";
import Header from "./components/Header";
import Lesson from "./components/Lesson";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

const GET_LESSONS_QUERY = gql`
query {
  lessons {
    id
    title
    teacher {
      name
    }
  }
}
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <div>
      <Header />
      <Sidebar />
      <Video />
      <Lesson />
    </div>
  )
}

export default App
