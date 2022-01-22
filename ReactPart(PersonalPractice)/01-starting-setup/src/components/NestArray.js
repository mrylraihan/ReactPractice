const arrayNested = [
    {family:'Stark', familyMembers :['judy','mike','Ryan' ]},
    {family:'Nark', familyMembers :['judy','mike','Ryan']},
];
// linked i used to practice this mapping
// https://atomizedobjects.com/blog/react/how-to-render-an-array-of-objects-with-map-in-react/

const NestArray = () =>(
    <>
      {arrayNested.map((cof) => (
        <ul key={cof.family}>The Family name is: {cof.family} {cof.familyMembers.map(people => <li key={Math.random().toString()}>{people}</li>)}</ul>
      ))}
    </>
)

export default NestArray