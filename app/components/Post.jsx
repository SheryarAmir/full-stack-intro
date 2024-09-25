export default function post ({id ,title,content, autherName}){
    return (
        <div style={{border:'1px solid white' , padding:'15px', margin:"10px" , width:'50%' , marginLeft:'390px' }}>
            <h3> {autherName} </h3>
            <h4> {title} </h4>
            <p> {content} </p>
        </div>
    )
}