import React ,{useState} from 'react'
import { CreateComment, Like, Unlike ,Saved,UnSaved} from '../API/PostAPI';
import defaultUserAvatar from "../images/user.png";
import defaultImagePost from "../images/post_images/vivian_3_15_2020.jpg";
import InfoToast from "./ToastInfo";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ImagePost = ({post}) => {

    const [infoToast, setInfoToast] = useState(
      <InfoToast userId={1} hidden="hidden" />
    );
    const [totalComment,setTotalComment] = useState(post.totalComment)
    const [parentComment,setParentComment] = useState(0)
    const [comments,setComments] = useState(post.comments)
    const [commentContent,setCommentContent] = useState('')
    const [likes,setLikes] = useState(post.likes)
    const [isLike,setIsLike] = useState(post.hasLike) // get like in server
    const [isSaved,setIsSaved] = useState(post.hasSaved) // get saved in server
    const [showOverlay, setShowOverlay] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const homeReducer = useSelector((state)=>state.homeReducer)
  // components
  // header cpn
  
    const Header = ({user})=>{
      return (
        <div className="py-3 bg-white px-4 space-x-3 flex flex-row  justify-between items-center">
          <div className="space-x-3">
            <Link to={`/user/${post.user.id}`}>
              <img src={typeof user.avatar !== 'object' ? user.avatar : defaultUserAvatar} className="h-9 rounded-full inline cursor-pointer " />
            </Link>
            <Link to={`/user/${post.user.id}`}  className="text-sm font-semibold cursor-pointer relative">
              {post.user?post.user.user_name:'anonymous'} 
            </Link>
            {/* <a
              className="text-sm font-semibold cursor-pointer relative"
              onMouseEnter={() => {
                setTimeout(() => {
                  setInfoToast(<InfoToast userId={1} hidden=" " />);
                }, 1000);
              }}
              onMouseLeave={() => {
                setInfoToast(<InfoToast userId={1} hidden="hidden" />);
              }}
            >
             
            </a> */}
          </div>
  
          <div>
            <i
              className="fa-solid fa-ellipsis cursor-pointer "
              onClick={() => {
                setShowOverlay(!showOverlay);
                setShowPopup(!showPopup);
              }}
            ></i>
          </div>
        </div>
      )
    }
    // toast cpn
    const HeaderToast = ()=>{
      return(
        <>
          <ul
          className={`post__popup ${showOverlay ? "show-popup" : "hide-popup"} `}
        >
          <li>
            <a href="/">Report</a>
          </li>
          {post.user._id!==localStorage.getItem('instagram_user_id') &&  <li>
            <a href="/">Unfollow</a>
          </li>}
         
          <li>
            <a href="/">Go to post</a>
          </li>
          <li>
            <a href="/">Tagged accounts</a>
          </li>
          <li>
            <a href="/">Share to...</a>
          </li>
          <li>
            <a href="/">Copy link</a>
          </li>
          <li>
            <a href="/">Embed</a>
          </li>
          <li>
            <a href="/">Cancel</a>
          </li>
        </ul>
        <div
          className={`bg-overlay ${
            showOverlay ? "show-overlay" : "hide-overlay"
          }`}
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        ></div>
        </>
      )
    }
    // post image 
    const PostMedia = ({media})=>{
      return (
        <div>
          <img
            src={media ? media.path : defaultImagePost}
            className="w-full cursor-pointer"
            alt="image_post"
            onDoubleClick={ ()=>{
              isLike?setIsLike(false):setIsLike(true)
              isLike?handleUnlike():handleLike()}}
          />
        </div>
      )
    }
  
    const handleLike = async()=>{
      setLikes(likes+1)
      const result = await Like(localStorage.getItem('instagram_user_id'),post._id)
    }
    const handleUnlike = async()=>{
        setLikes(likes>=1? likes-1 : likes)
        const result = await Unlike(localStorage.getItem('instagram_user_id'),post._id)
    }
    const handleSaved = async()=>{
        setIsSaved(true)
        await Saved(localStorage.getItem('instagram_user_id'),post._id)
    }
    const hanldeUnSaved = async ()=>{
        setIsSaved(false)
        await UnSaved(localStorage.getItem('instagram_user_id'),post._id)
    }
    // post action cpn
    const PostActionIcon = ()=>{
     
      return (
        <div className="flex flex-row  px-4 justify-between">
          <div className="space-x-4">
            <i className={`${isLike ?'fa-solid liked':'fa-regular hover:text-gray-500'} text-2xl fa-heart cursor-pointer `} onClick={()=>{
              isLike?setIsLike(false):setIsLike(true)
              isLike?handleUnlike():handleLike()
            }}></i>
            <i className="fa-regular text-2xl fa-comment cursor-pointer hover:text-gray-500"></i>
            <i className="fa-solid text-2xl fa-share cursor-pointer hover:text-gray-500"></i>
          </div>
          <div>
            <i className={` ${!isSaved ? 'fa-regular' : 'fa-solid'} text-2xl fa-bookmark  cursor-pointer hover:text-gray-500`} onClick={()=>{
                isSaved ? hanldeUnSaved() : handleSaved()
            }}></i>
          </div>
        </div>
      )
    }
    // post info 
    const PostInfo = ({post})=>{
      const PostCaption = ({caption})=>{
        return (
          <div className="w-1/2">
            <p className={`w-2/3 font-semibold text-sm`}>
              {caption || "lorem ipsum scsaksaklnalksnsacsabckasnckn"}
            </p>
          </div>
        )
      } 
  
      const PostLike = ({likes})=>{
        return (
          <a className="text-sm font-semibold">{typeof likes !== 'undefined' ? likes : 0} likes</a>
        )
      }
  
      const Comments = ({comments = []})=>{
        return (
          <>
            <a className="text-sm text-gray-400 cursor-pointer">
              View All {totalComment} Comments
            </a>
            {comments.map((val,key)=>{
              return (
                <div className="flex flex-row justify-between items-center py-0" key = {key}>
                  <p
                    className="text-sm w-1/3 font-semibold truncate block cursor-pointer "
                    href="#"
                  >
                    {" "}
                    <a className="hover-decoration">
                      {typeof val.user !== 'undefined' ? val.user.user_name:'defaultUser'}
                    </a>{" "}
                    {val.content || 'No Comment'}
                  </p>
                  <i className="fa-regular text-xs fa-heart  cursor-pointer ml-auto"></i>
                </div>
              )
            })}
            
          </>
        
        )
      }  
  
      const UpdateTime = ({time})=>{
        return (
          <p className="text-gray-400 text-time uppercase	mb-0">
            {typeof time.updateAt !== 'undefined '? time.updateAt : "march 12"}
          </p>  
        )
      }
  
      return (
        <div className="px-4 pt-2 pb-0">
          <PostLike likes={likes}/>
            <PostCaption caption={post.caption}/>
            <div>
              {/* comments */}
              <Comments comments={post.comments}/>
              {/* time */}
              <UpdateTime time={post.time}/>
            </div>
        </div>
      )
    }
  
    const handleAddComment = async(e)=>{
      e.preventDefault()
      if(commentContent.trim()!==''){
        let userId = localStorage.getItem('instagram_user_id') || null
        if(userId!==null  && post._id){
          let result = await CreateComment(userId,post._id,commentContent,parentComment)
          if(result.data){
            let comment = {
              content:result.comment.content,
              id:result.comment._id,
              parentId:result.comment.parentId,
              user:{
              ...homeReducer.values.user
              },

            }
            let updateComments = [...comments]
            updateComments.pop()
            updateComments = [...updateComments,comment]
            setComments(updateComments)
            setCommentContent('')
            setTotalComment(totalComment+1)

          }
        }
      }
    }
    const setContent = (value)=>{
      setCommentContent(value)
    }
  
    return (
      <div className="post border bg-white">
        <Header user={post.user}/>
        <HeaderToast/>
        <PostMedia media={post.media}/>
        <div className="py-5">
          <PostActionIcon/>
          <PostInfo
           post={{
             likes:post.likes,
             comments:comments,
             caption:post.caption,
             time:{
               createAt:post.createdAt,
               updateAt:post.updateAt
              }
            }}
           />
        </div>
         <div className="px-3 border-t py-3">
          <form className="flex flex-row justify-between items-center space-x-3" onSubmit={handleAddComment}>
            <i className="fa-regular fa-xl fa-face-smile cursor-pointer"></i>
            <input
              className="w-full text-sm text-gray-400  py-1 pl-2 comment-input"
              placeholder="Typing some thing"
              onChange={(e)=>{
                setContent(e.target.value)
              }}
              value={commentContent}
            />
            <button type='submit' className="text-sm font-semibold text-sky-500 cursor-pointer">
              Post
            </button>
          </form>
        </div>  
      </div>
    );
  };
export default ImagePost