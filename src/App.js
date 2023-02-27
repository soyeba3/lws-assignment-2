import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "./components/TableRow";
import frame from "./img/icons/Frame.svg";
import vector1 from "./img/icons/Vector (1).svg";
import vector3 from "./img/icons/Vector (3).svg";
import logo from "./img/lws-logo.svg";
import { addFlight } from "./redux/flight/actions";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state);
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [date, setDate] = useState();
  const [guests, setGuests] = useState("");
  const [ticketClass, setTicketClass] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "from") {
      setDestinationFrom(e.target.value);
    } else if (e.target.name === "to") {
      setDestinationTo(e.target.value);
    } else if (e.target.name === "date") {
      setDate(e.target.value);
    } else if (e.target.name === "guests") {
      setGuests(e.target.value);
    } else if (e.target.name === "ticketclassName") {
      setTicketClass(e.target.value);
    }
  };

  useEffect(() => {
    if (bookingData.length === 3) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [bookingData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookingData.length < 3) {
      dispatch(
        addFlight({ destinationFrom, destinationTo, date, guests, ticketClass })
      );
    } else {
      alert("Booking limit are already exceeded");
    }
  };

  return (
    <div className="App">
      <header id="header">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="/">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="first-hero lws-inputform"
            >
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src={frame} alt="icon" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="from"
                    id="lws-from"
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src={frame} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="to"
                    id="lws-to"
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Cox's Bazar</option>
                  </select>
                </div>
              </div>

              <div className="des-from">
                <p>Journey Date</p>
                <input
                  type="date"
                  className="outline-none px-2 py-2 w-full date"
                  name="date"
                  id="lws-date"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src={vector1} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src={vector3} alt="" />
                  <select
                    className="outline-none px-2 py-2 w-full"
                    name="ticketclassName"
                    id="lws-ticketclassName"
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="" hidden>
                      Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button
                disabled={buttonDisable && "disabled"}
                style={{ cursor: buttonDisable ? "not-allowed" : "pointer" }}
                className="addCity"
                type="submit"
                id="lws-addCity"
              >
                <svg
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">className</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {bookingData.map((item, index) => {
                return <TableRow key={index} item={item} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
