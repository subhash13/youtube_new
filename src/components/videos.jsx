import "../styles/videos.css"
const Videos = () => {
    let videos = [
        {
            thumbnail:"https://i.ytimg.com/vi/7ttG90raCNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnTFA7zsyMwe465W-6Xx-IdI0QhA",
            channelIcon:"https://yt3.ggpht.com/BuuiFz-3GG9xkw0u3tnA7mjAw_HgOCRncHnZy3pncEIjK6IGlT2wNZgW_9A7tf5qZ651rRQQ8g=s68-c-k-c0x00ffffff-no-rj",
            title:"NO CGI is really just INVISIBLE CGI (1/4)",
            channelName:"The Movie Rabbit Hole",
            views:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/3FBQBCnQgy0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuDoCRQ4LpHK9FExQpvn2txURI7w",
            channelIcon:"https://yt3.ggpht.com/872ASg8vdwwB72uGI10cB8tR_gLXHuZnemLTdoeJppV45whb1WRQ_9BZ9WesOShyYfYev9BnoQ=s68-c-k-c0x00ffffff-no-rj",
            title:"Making Buhari Bun Butter Jam | Taste it Make it | Episode 2 | Cookd",
            channelName:"Cookd",
            views:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/lxi1jl1eWkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAaGQa91bgGzUbT3y0IH7pSlO4ug",
            channelIcon:"https://yt3.ggpht.com/ytc/APkrFKaFWWVESRmucQns6o0XBmtnBI5-3fC0VJopRYhaBw=s68-c-k-c0x00ffffff-no-rj",
            title:"Behind the mix of #Leo",
            channelName:"Dolby",
            views:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/Ng5sHevRX3w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkcfqwiBCs_-bCNTboTpxacay0hg",
            channelIcon:"https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s68-c-k-c0x00ffffff-no-rj",
            title:"Why Don't More Smartphones Have This?",
            channelName:"Marques Brownlee",
            views:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/6bg5tM2jmUU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCT3gDBV1XWGWl3V6JAi09f9JvixA",
            channelIcon:"https://yt3.ggpht.com/pwQHlfZMAwlahxyfrKTPISKDVQmQquboZBwh89qWiV_VOKCAU7OvFcAoyT4OrfE_z45ie07Qrw=s68-c-k-c0x00ffffff-no-rj",
            title:"#Yash19 Title Reveal - Rocking Star Yash | KVN Productions",
            channelName:"KVN PRODUCTIONS",
            views:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/basLDO2bj2k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjBiKSf7fqyBw7NK7M75DuQoEgPg",
            channelIcon:"https://yt3.ggpht.com/ugAmG9LeliJJoiyacIecdiq_ZgRNdmjCIohaN5x3QEOmWB9dNUsKuCU8ngLs3JUauHZ4-boVkA=s68-c-k-c0x00ffffff-no-rj",
            title:"Marvel’s Blade | Announcement Trailer | The Game Awards 2023",
            channelName:"Marvel Entertainment",
            views:10
        },
    ]
    return ( 
        <div className="videos">
            {videos.map((data)=>(
                <div className="video">
                    <div className="thumbnail">
                        <img height={225} width={400} src={data.thumbnail} alt="" />
                    </div>
                    <div className="details">
                        <div className="channelIcon">
                            <img height={36} width={36} src={data.channelIcon} alt="" />
                        </div>
                        <div className="content">
                            <h2>{data.title}</h2>
                            <p>{data.channelName}</p>
                            <p>{data.views}M views</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Videos;