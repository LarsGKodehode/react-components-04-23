export function EmployeeCard(properties) {
  return (
    <div className="employee-card">
      <h3>{properties.name}</h3>
      <h4>Age: {properties.age}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, earum.</p>
    </div>
  )
}

function EmployeeCardVariantB(properties) {
  const { name, age } = properties

  return (
    <div>
      <h3>{name}</h3>
      <h4>Age: {age}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, earum.</p>
    </div>
  )
}

function EmployeeCardVariantC({
  name,
  age
}) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>Age: {age}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, earum.</p>
    </div>
  )
}

const EmployeeCardArrowFunction = (properties) => {
  return (
    <div>
      <h3>{properties.name}</h3>
      <h4>Age: {properties.age}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, earum.</p>
    </div>
  )
}