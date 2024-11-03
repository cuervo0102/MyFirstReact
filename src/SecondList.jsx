function SecondList(props){

    const hxh = props.hxh

    const hxh_list = props.items.map(h => <li key = {h.id}>
                                    {h.name} : {h.power}
                                 </li>)



    return (
        <ul>
            {hxh_list}
        </ul>
    );


}
export default SecondList;