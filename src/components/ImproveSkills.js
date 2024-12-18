export default function ImproveSkills(){

    const list = [
        "Learn new recepies",
        "Improve cooking skills",
        "Create your own recipes",
        "Learn cooking techniques",
        "Practice your culinary vocabulary",
        "Learn cooking tips and tricks"
    ]

    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                    <button className="btn">signup now</button>
            </div>
            
        </div>
    )
}