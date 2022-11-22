const Customer_data = (props) => {
    const [data, setData] = useState({"data": "NONE"})
    setData("{props.data}");
    return ( 
    <div>
{data};            
    </div> );
}
 
export default Customer_data;