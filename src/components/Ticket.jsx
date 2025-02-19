import ticket from "/public/assets/Ticket.webp";

const Ticket = () => {
    return (
        <div id="ticket" className="w-full h-full flex justify-center items-center">
            <img src={ticket} alt="Ticket"/>
        </div>);
}

export default Ticket;