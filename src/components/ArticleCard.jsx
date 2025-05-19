
function ArticleCard({img, title}){
return (
    <div>
        <img src={img} alt={`a photo of ${title}`} />
        <h2>{title} </h2>
    </div>
)
};

export default ArticleCard;