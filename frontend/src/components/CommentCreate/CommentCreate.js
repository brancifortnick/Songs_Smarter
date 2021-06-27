import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment, getComments } from "../../store/comment";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom'
//?          userId  songId   body   id  //

const CommentCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const userId = useSelector(state=> state.session.user?.id)
//   const comments = useSelector(state=> state.comments);
  const {id} = useParams()



  const [body, setBody] = useState('');
  const updateBody = (e) => setBody(e.target.value)
  const songId = id;

  // useEffect(() => {
  //   dispatch(getComments());
  // }, [dispatch]);


  const onSubmit = async (e) => {
    e.preventDefault();
    const comment = {
        userId,
        songId,
        body,
    }
  const newComment = await dispatch(createComment(comment));

  // console.log(newComment, "______________newComment______________")
    if(newComment){
      dispatch(getComments());
      setBody('')
      history.push(`/song/${id}`)
    }
  }


  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={onSubmit}>
        <input
          type="textarea"
          placeholder="Comment here..."
          value={body}
          onChange={updateBody}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {/* <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default CommentCreate;
