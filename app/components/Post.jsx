export default function ({id ,title,content, autherName}){
    return (
        <div style={{border:'1px solid white' , padding:'15px'}}>
            <h3> {autherName} </h3>
            <h4> {title} </h4>
            <p> {content} </p>
        </div>
    )
}