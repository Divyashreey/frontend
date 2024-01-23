import Sidebar from "../sidebar/Sidebar"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img  className="singlePostImg"  src="https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Baku_destination_image_2_l_579_1000.jpg"
alt=""/>
<h1 className="singlePostTitle">Baku
<div className="singlePostEdit">
<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
<i className="singlePostIcon fa-solid fa-trash"></i>
</div>
</h1>
<div className="singlePostInfo">
    <span className="singlePostAuthor">Author:<b>Divya</b></span>
    <span className="singlePostDate"> 1 hour ago</span>
</div>
<p className="SinglePostDesc">
Baku is the capital city of Azerbaijan, a country located on the Caspian Sea. 
        It is the largest city in Azerbaijan and a major cultural, economic, and political centre of the country. 
        Baku has a rich history and culture, with evidence of human settlements dating back to the 4th millennium BCE. 
        Today, Baku is a modern and vibrant city, known for its stunning architecture, beautiful parks, and bustling streets.
        Baku became a venue for major international events.
         It hosted the 57th Eurovision Song Contest in 2012, the 2015 European Games, 4th Islamic Solidarity Games, 
         the European Grand Prix in 2016, the Azerbaijan Grand Prix since 2017, the final of 
         the 2018–19 UEFA Europa League, 
         and was one of the host cities for UEFA Euro 2020. 
         The Baku International Sea Trade Port is capable of handling two million 
         tonnes of general and dry bulk cargoes per year.
        Baku is renowned for its harsh winds, reflected in its nickname, the "City of Winds".
        Traces of human settlement in the region of present-day Baku date back to the Stone Age. 
        Bronze-Age rock carvings have been discovered near Bayil, and a bronze figure of a small fish in the territory of the Old City.
        These have led some to suggest the existence of a Bronze-Age settlement within the city's territory.
         Near Nardaran, a place called Umid Gaya features a prehistoric observatory, where images of the sun and of various constellations are carved into rock together with a primitive astronomic table.
         Further archeological excavations have revealed various prehistoric settlements, native temples, statues and other artifacts within the territory of the modern city and around it.
In the 1st century AD, the Romans organised two Caucasian campaigns and reached what is today Baku. 
 Near the city, in what is today Gobustan, Roman inscriptions dating from AD 84 to 96 survive – some of the earliest written evidences for a city there.
</p>
       </div>
       <Sidebar/>            
    </div>
    
  )
}
