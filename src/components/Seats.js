
function Seats(props) {
    // const toggle = () => {
    //     props.toggleStatus(1);
    // };

    return (
        <div className="seats">
            { props.seats.map((seat, key) =>
                <button className={ seat ? 'seat' : 'seat seat-sold-out'} key={key} onClick={() => { props.toggleStatus(key)}} >
                    {"A" + key}
                </button>
            )}
        </div>
     );
}

export default Seats;