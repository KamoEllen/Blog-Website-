import "./post.css"

export default function Post(){
    return(
        <div className="post">
        post
        <img className="postImg" src="https://picstatio.com/thumb/7d69de/Jabami-Yumeko-smile-face.jpg" alt="" />
        <div className="postInfo">
            <div className="postCategories">
            <span className="postCategory">Story</span>
            <span className="postCategory">Family</span>
            </div> 
            <span className="postTitle">Lorem ipsum dolor sit amet anim id est laborum.
        </span>  
        <hr/>
            <span className="postDate">1 hour ago</span>
           
        </div>
         <p classsName="postInfo">
            Lorem ipsum dolor sit amet anim id est laborumLorem ipsum dolor sit
            amet anim id est laborum Lorem 
            ipsum dolor sit amet anim id est laborum 
            Lorem ipsum dolor sit amet anim id est laborum
            Lorem ipsum dolor sit amet anim id est laborumLorem ipsum dolor sit
            amet anim id est laborum Lorem 
            ipsum dolor sit amet anim id est laborum 
            Lorem ipsum dolor sit amet anim id est laborum
            Lorem ipsum dolor sit amet anim id est laborumLorem ipsum dolor sit
            amet anim id est laborum Lorem 
            ipsum dolor sit amet anim id est laborum 
            Lorem ipsum dolor sit amet anim id est laborum</p>
        </div>
    )
}