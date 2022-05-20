import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function newsitem(props) {
    document.title = props.title + " - NewsMonkey ";
    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);

    const [news, setNews] = useState(1);
    const [totalPage, settotalPage] = useState(1);

    useEffect(() => {
        setloading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8c0fc3f3182644d9aa2a1128e62d8450&page=${news}&category=${props.category}`;
        fetch(url).then(resp => resp.json()).then(resp => {
            setPosts([...posts, ...resp.articles]);
            setloading(false);
            settotalPage(Math.floor(resp.totalResults / 10));
        })
    }, [news])
    return (
        <>
            <InfiniteScroll dataLength={totalPage} next={() => setNews(news + 1)} hasMore={news < totalPage}>
                <div className="container my-3">
                    <h1 className={`text-center mb-3 fw-bolder text-${props.headingColor}`} >NewsMonkey- Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headline</h1>
                    <div className="row">
                        {posts.map(post => <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-3" key={post.url}>
                            <div className="card" >
                                <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger" >
                                    {post.source.name}
                                </span>
                                <img src={post.urlToImage ? post.urlToImage : "https://images.wsj.net/im-544875/social"} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    <a href={post.url} className="btn btn-dark btn-sm" target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>)}
                    </div>


                </div>
            </InfiniteScroll>
            {loading &&
                <div className="container text-center"><img src="/spinner.gif" /></div>
            }
        </>
    )

}
