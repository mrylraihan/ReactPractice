const arrayOfObjects = [
  { coffee: "Americano", size: "Medium" },
  { coffee: "Espresso", size: "Single" },
];



const TestArray = () =>(
    <>
      {arrayOfObjects.map((cof) => (
        <li key={cof.size}>The Coffee Type is {cof.coffee} and the size is: {cof.size}</li>
      ))}
    </>
)

export default TestArray