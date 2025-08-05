const Testing = ({ onClick, data }) => {
  console.log("child component rendered");
  //   const [value, setValue] = useState({
  //     name: "",
  //     email: "",
  //   });
  //   const handleChange = (e) => {
  //     setValue({ ...value, [e.target.name]: e.target.value });
  //     getValue(value);
  //   };

  //   const handleEmail = (e, type) => {
  //     getValue(e.target.value, type);
  //   };
  return (
    <div>
      {/* <input
        value={value.name}
        name="name"
        type="text"
        onChange={handleChange}
      />
      <input
        value={value.email}
        name="email"
        type="email"
        onChange={handleChange}
      /> */}
      <button onClick={onClick}>click</button>
      <h1>{data}</h1>
    </div>
  );
};

export default Testing;
