import Link from "next/link";
export async function generateStaticParams() {

  const res= await fetch('http://localhost:5000/post')
  const posts = await res.json()
  const ids = posts.map((post)=>{
      return {
         id : post.id + ""
      }
  })
  console.log(ids);

  return ids;
}

const detailPage  =  async ({params}) => {
        //   console.log(params.id);
        const res = await fetch(`http://localhost:5000/post/${params.id}`)
        const post = await res.json()
    return (
        <div> 
                <div key={post.id} className="card w-[70%] mt-2 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title"> {post.title} </h2>
                      <p> {post.description} </p>
                      <p> Like: {post.like_count} </p>
                      <div className="card-actions justify-end">
                        <Link href='/posts' >
                        <button className="btn btn-primary"> Back </button>
                        </Link>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default detailPage;