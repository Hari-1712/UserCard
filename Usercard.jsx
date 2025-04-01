const userdata = [
    {
        name :"Tharun" ,
        city:"Jaipur",
        description:"Entreprenuer" ,
        skills:["UI / UX","Front-end developer","HTML","CSS","Javascript","React","Node"],online: true, 
        profile:"images/imae4.JPG"
    },
    {
        name :"Tom Cruise" ,
        city:"America",
        description:"Actor" ,
        skills:["UI / UX","Front-end developer","HTML","CSS","Javascript","React","Node"],online: false, 
        profile:"images/Image1.png"
    },
    {
        name :"Tom Holland" ,
        city:"New York",
        description:"Spider-Man" ,
        skills:["UI / UX","Front-end developer","HTML","CSS","Javascript","React","Node"],online: true, 
        profile:"images/Image2.png"
    }
]

function User(props){
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="butttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
               {props.skills.map((skill,index) =>(
                <li key={index}>{skill}</li>
               ))}

            </ul>
        </div>
    </div>
}

const Usercard = () => {
  return (
    <>
    {userdata.map((user,index) => (
        <User key={index} name={user.name} city={user.city} description={user.desccription} online= {user.online} profile= {user.profile} skills= {user.skills} />
    ))}
    </>
  )
}

 //   <User name="Tharun" city="Jaipur" description="Entreprenuer" skills={["UI / UX","Front-end developer","HTML","CSS","Javascript","React","Node"]} online={true} profile="images/imae4.JPG" />

export default Usercard
