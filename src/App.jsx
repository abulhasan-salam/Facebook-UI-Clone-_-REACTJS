
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Posttab from './Posttab'
import Story_feed from './Story_feed'
import Main_feed from './Main_feed'
import Login from './Login'
import { useState,useEffect} from 'react'
import Api_request from './Api_request'


function App() {

  const POST_API = ` http://localhost:5176/posts`
  const USER_API = `http://localhost:5176/users`
  const [posts,setpost]=useState([])
  const [clicked,setclicked]=useState()
  const [comment,setcommnet]=useState([])
  const [users,setuser] = useState() || []
  const [user_present,setuser_present] =useState(null)

  useEffect(() => {
     
    const fetchpost = async() =>
    {
      try
      {
        const response_post = await fetch(POST_API)
        const response_user = await fetch(USER_API)
        const post_data = await response_post.json()
        const user_data = await response_user.json()
        console.log(post_data)
        setpost(post_data)
        setuser(user_data)
      }
      catch(err)
      {
        console.log(err.message)
      }

    }
    fetchpost()

  }, []);
  
  const check_user = (user_id, pass) => {
     return users.find(user => user.user_name === user_id || user.user && user.password === pass);
  };
    const handleSubmit = event => {
    event.preventDefault();

    const enter_userid = document.getElementById('user_name').value;
    const enter_pass = document.getElementById('passkey').value;

    const matched_user = check_user(enter_userid, enter_pass);

    if (matched_user) {

      setuser_present(matched_user)
      console.log("User logged in:", matched_user);
    } else {
     
      console.log("Invalid credentials. Please try again.");
    }
  };


  const handlecomment = (id) => {
    console.log("Clicked ID:", id);
    const clickedPost = posts.find((item) => item.id === id);
    console.log("Clicked Post:", clickedPost);
    if (clickedPost) {
      const comments = clickedPost.comments|| [];
      console.log("Comments in the Post", comments);
      setcommnet(comments);
    }
  }
  
 

  const handleclick = async(id,req) =>
  {
    const liked_post = posts.map((post) => (
      post.id === id && req === 'Like'
      ? {
          ...post,
          likes: post.likes + (post.liked ? -1 : 1),
          // likes: post.likes + (post.liked ? -1 : 1), // Toggle like/unlike
          liked: !post.liked, // Toggle liked state
        }
      :post
      
    ))
    const clickedPost = liked_post.find((item) => item.id === id);
    const updateClicked = {
      id:id,
      req:req,
      liked: clickedPost.liked,
    }
    setclicked(updateClicked)
    console.log(clicked)
    setpost(liked_post)




    const optionobj =
    {
      method:'PATCH',
      headers:{
        'Content-Type':'application/JSON'
      },
      body:JSON.stringify(clickedPost)
    }
    const update_url = `${POST_API}/${id}`
    const res = await Api_request(update_url,optionobj)
    if(res) console.log(res)
  
  }
  console.log(`user in app ${JSON.stringify(user_present)}`)
  return (
    <>
    <div className="App">

    {user_present ? (<Login
    users={users}
    handleSubmit={handleSubmit}
    check_user={check_user}
    />):(
      <>
      <Header/>
      <Nav/>
      <Posttab
        user_present={user_present}
      />
       <Story_feed
      user_present={user_present}/>
      <Main_feed
        posts ={posts}
        handleclick={handleclick}
        handlecomment={handlecomment}
      />
      </>
      
    )}
          

    </div>
      
    </>
  )
}

export default App



