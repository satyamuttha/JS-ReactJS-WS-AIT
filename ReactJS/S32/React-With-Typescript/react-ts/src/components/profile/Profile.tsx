import "./Profile.css"
interface IPropsTypes {
    name:string;
    gender:string
}
function Profile(props:IPropsTypes){
return <div>
      <dl>
        <dt>
 <b>User Name</b>
        </dt>
      
        <dd>
        {props.name}
        </dd>

         <dt>
 <b>Gender</b>
        </dt>
      
        <dd>
        {props.gender}
        </dd>
      </dl>

      
</div>
    
 }

 export default Profile