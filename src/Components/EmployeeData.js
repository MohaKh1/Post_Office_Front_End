const Employee_data = () => {
    const [data, setData] = useState({"data": "NONE"})
    setData("{props.data}");
    return ( <div>
        {data}
    </div> );
}
 
export default Employee_data;