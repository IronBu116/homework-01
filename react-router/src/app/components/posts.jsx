import PostList from "./postList";
import Post from "./post";
import { useParams } from "react-router";
/* import query from "query-string"; */
/* import _ from "lodash"; */

const Posts = ({ match }) => {
  const params = useParams();
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  /*   const search = query.parse(location.search); */
  const { postId } = params;
  /*   const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts; */

  return (
    <>
      {postId ? <Post posts={posts} id={postId} /> : <PostList posts={posts} />}
    </>
  );
};

export default Posts;
