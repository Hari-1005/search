import React, { useEffect, useState } from 'react'
const arrayData = [
  {"name": "John Smith", "email": "john.smith@webmail.net", "phone": "+18100128276"},
  {"name": "Charlie Doe", "email": "charlie.doe@myemail.com", "phone": "+12556684523"},
  {"name": "John Doe", "email": "john.doe@example.com", "phone": "+12574316868"},
  {"name": "Sarah White", "email": "sarah.white@testmail.com", "phone": "+16230027818"},
  {"name": "Charlie Smith", "email": "charlie.smith@random.org", "phone": "+12803496524"},
  {"name": "Bob Johnson", "email": "bob.johnson@random.org", "phone": "+18535100997"},
  {"name": "Laura Smith", "email": "laura.smith@testmail.com", "phone": "+19925085280"},
  {"name": "Laura Doe", "email": "laura.doe@random.org", "phone": "+15143024974"},
  {"name": "Michael Doe", "email": "michael.doe@random.org", "phone": "+17568161955"},
  {"name": "Michael Brown", "email": "michael.brown@webmail.net", "phone": "+14635804878"},
  {"name": "Charlie Doe", "email": "charlie.doe@random.org", "phone": "+13489477645"},
  {"name": "Bob Doe", "email": "bob.doe@myemail.com", "phone": "+12227536559"},
  {"name": "Sarah Johnson", "email": "sarah.johnson@testmail.com", "phone": "+14437999318"},
  {"name": "Charlie Martinez", "email": "charlie.martinez@example.com", "phone": "+13941363225"},
  {"name": "Bob Martinez", "email": "bob.martinez@random.org", "phone": "+15157075693"},
  {"name": "David Martinez", "email": "david.martinez@example.com", "phone": "+12352623155"},
  {"name": "Alice Johnson", "email": "alice.johnson@webmail.net", "phone": "+14808990858"},
  {"name": "Alice Davis", "email": "alice.davis@webmail.net", "phone": "+17216109137"},
  {"name": "Charlie Miller", "email": "charlie.miller@webmail.net", "phone": "+19015396539"},
  {"name": "Emily White", "email": "emily.white@testmail.com", "phone": "+17702277668"},
  {"name": "Sarah Davis", "email": "sarah.davis@example.com", "phone": "+19181362558"},
  {"name": "Emily Johnson", "email": "emily.johnson@myemail.com", "phone": "+13988011579"},
  {"name": "John White", "email": "john.white@webmail.net", "phone": "+15773817296"},
  {"name": "David Davis", "email": "david.davis@example.com", "phone": "+15097916147"},
  {"name": "Jane Smith", "email": "jane.smith@example.com", "phone": "+12176866931"},
  {"name": "Sarah Miller", "email": "sarah.miller@myemail.com", "phone": "+19108807613"},
  {"name": "Alice Miller", "email": "alice.miller@webmail.net", "phone": "+18052342300"},
  {"name": "Michael White", "email": "michael.white@testmail.com", "phone": "+15060045480"},
  {"name": "Jane Brown", "email": "jane.brown@myemail.com", "phone": "+16862434671"},
  {"name": "Sarah Williams", "email": "sarah.williams@myemail.com", "phone": "+14818853110"},
  {"name": "Bob Smith", "email": "bob.smith@webmail.net", "phone": "+17655165140"},
  {"name": "Charlie Martinez", "email": "charlie.martinez@webmail.net", "phone": "+14471120649"},
  {"name": "John Garcia", "email": "john.garcia@random.org", "phone": "+15626595166"},
  {"name": "Laura Brown", "email": "laura.brown@webmail.net", "phone": "+19530412957"},
  {"name": "Bob Martinez", "email": "bob.martinez@random.org", "phone": "+12069019874"},
  {"name": "David White", "email": "david.white@testmail.com", "phone": "+15855175153"},
  {"name": "Charlie Brown", "email": "charlie.brown@example.com", "phone": "+18982156419"},
  {"name": "David Williams", "email": "david.williams@random.org", "phone": "+12167827451"},
  {"name": "Charlie Miller", "email": "charlie.miller@myemail.com", "phone": "+18850001689"},
  {"name": "Jane Martinez", "email": "jane.martinez@webmail.net", "phone": "+15977502119"},
  {"name": "Michael Davis", "email": "michael.davis@testmail.com", "phone": "+13341176348"},
  {"name": "Laura Miller", "email": "laura.miller@myemail.com", "phone": "+14924135615"},
  {"name": "John Johnson", "email": "john.johnson@random.org", "phone": "+12351186216"},
  {"name": "Michael Doe", "email": "michael.doe@myemail.com", "phone": "+18580648654"},
  {"name": "David Brown", "email": "david.brown@example.com", "phone": "+11970020740"},
  {"name": "Jane Garcia", "email": "jane.garcia@testmail.com", "phone": "+18907057325"},
  {"name": "Laura Garcia", "email": "laura.garcia@myemail.com", "phone": "+18794292288"},
  {"name": "David Martinez", "email": "david.martinez@random.org", "phone": "+13454505265"},
  {"name": "Alice Doe", "email": "alice.doe@webmail.net", "phone": "+13276984325"},
  {"name": "Michael Martinez", "email": "michael.martinez@testmail.com", "phone": "+17151331177"},
  {"name": "John White", "email": "john.white@myemail.com", "phone": "+14307885729"},
  {"name": "David Williams", "email": "david.williams@myemail.com", "phone": "+13969468897"},
  {"name": "Emily Brown", "email": "emily.brown@testmail.com", "phone": "+13126665818"},
  {"name": "Bob Johnson", "email": "bob.johnson@testmail.com", "phone": "+16918984307"},
  {"name": "Charlie Williams", "email": "charlie.williams@random.org", "phone": "+19527644456"},
  {"name": "Charlie Brown", "email": "charlie.brown@testmail.com", "phone": "+15909869878"},
  {"name": "David Smith", "email": "david.smith@myemail.com", "phone": "+14951121533"},
  {"name": "John White", "email": "john.white@example.com", "phone": "+14427022352"},
  {"name": "Alice Johnson", "email": "alice.johnson@myemail.com", "phone": "+13294009421"},
  {"name": "Sarah Johnson", "email": "sarah.johnson@random.org", "phone": "+12520159240"},
  {"name": "David Doe", "email": "david.doe@example.com", "phone": "+14703212697"},
  {"name": "Emily Smith", "email": "emily.smith@testmail.com", "phone": "+17762051579"},
  {"name": "Sarah Brown", "email": "sarah.brown@testmail.com", "phone": "+16364178835"},
  {"name": "David Miller", "email": "david.miller@myemail.com", "phone": "+17580349901"},
  {"name": "Charlie Martinez", "email": "charlie.martinez@myemail.com", "phone": "+18883398810"},
  {"name": "John Smith", "email": "john.smith@random.org", "phone": "+18248403822"},
  {"name": "Laura White", "email": "laura.white@random.org", "phone": "+13522928428"},
  {"name": "Michael Williams", "email": "michael.williams@myemail.com", "phone": "+12757647303"},
  {"name": "Jane Smith", "email": "jane.smith@testmail.com", "phone": "+12013111645"}
]



const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [arr, setArr] = useState([])

  useEffect(()=>{
    const strlower = inputValue.toLowerCase()

    if (inputValue.length > 0) {
      let filterarr = arrayData.filter(d => d.name.toLocaleLowerCase().includes(strlower)|| d.email.toLocaleLowerCase().includes(strlower) || d.phone.toLocaleLowerCase().includes(strlower));
      setArr(filterarr)
    }else{
      setArr([])
    }

    },[inputValue])

  return (
    <div style={{textAlign:'center'}}>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Type here...' />
      <div style={{padding:'10px', display:'flex', flexWrap:'wrap'}}>

      {arr.length > 0 && arr.map((v,i) => (
        <div key={i} style={{border:'2px solid black', padding:'20px', margin:'10px', flex:'1 200px', backgroundColor:'lightgreen', borderRadius:'5px'}}>
          <h3>Name : {v.name}</h3>
          <h4>{v.email}</h4>
          <h4>Phone : {v.phone}</h4>
        </div>
      ))}

      </div>
    </div>
  )
};

export default App;
