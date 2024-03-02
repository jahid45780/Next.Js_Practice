import Link from "next/link";


const PostsPage = async () => {

     const res = await fetch ('http://localhost:5000/post')
     const post = await res.json()
    //  console.log(post)

    return (
        <div className=" w-full" >
            <h1> total post: {post.length}  </h1>
               
               {
                post.map((post)=> ( 

                    <div key={post.id} className="card w-[70%] mt-2 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title"> {post.title} </h2>
                      <p> {post.description} </p>
                      <p> Like: {post.like_count} </p>
                      <div className="card-actions justify-end">
                        <Link href={`/posts/${post.id}`} >
                        <button className="btn btn-primary"> See More </button>
                        </Link>
                        <Link href='/users' >
                        <button className="btn btn-primary"> User </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                 ) )
               }

        </div>
    );
};

export default PostsPage;