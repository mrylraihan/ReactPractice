const gundamArrays = [
    {pilot: 'Hero', mechs: ['Wing Gundam', 'Wing Gundam 001', 'Wing Gundam 01']}, 
    {pilot: 'Qatra', mechs: ['Sandrock', 'Wing Gundam 01']}, 
    {pilot: 'Duo', mechs: ['Heavy Arms', 'Heavy Arms 2']}, 
    {pilot: 'Miliardo', mechs: ['Tallgeese', 'Tallgees 00']}, 
]

// const GundamIteration =()=>(
//        <div>
//       {gundamArrays.map((pil) => (
//         <ul key={pil.pilot}>The Pilot is: {pil.pilot} {pil.mechs.map(gund=><li>{gund}</li>)}</ul>
//       ))}
//     </div>

// )

function GundamIteration(){
    return (
            <div>
      {gundamArrays.map((pil) => (
        <ul key={pil.pilot}>The Pilot is: {pil.pilot} {pil.mechs.map(gund=><li>{gund}</li>)}</ul>
      ))}
    </div>
        
    )
}

export default GundamIteration