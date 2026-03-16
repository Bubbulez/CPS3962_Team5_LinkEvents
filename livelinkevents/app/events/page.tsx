import "../../styles/main.css";
import "../../styles/events.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <h1>All Events</h1>

        <p className="page-description">
          Search for artists and view upcoming concerts.
        </p>

        <form className="search-form">
          <div className="form-group">
            <label htmlFor="artist">Search Artist</label>
            <input
              type="text"
              id="artist"
              name="artist"
              placeholder="Enter artist name"
            />
          </div>

          <button type="submit">Search</button>
        </form>

        <section className="events-list">
          <h2>Upcoming Events</h2>

          <div className="event-card">
            <h3>Artist Name</h3>
            <p>Date: TBD</p>
            <p>Location: TBD</p>
            <button>View Tickets</button>
          </div>

          <div className="event-card">
            <h3>Artist Name</h3>
            <p>Date: TBD</p>
            <p>Location: TBD</p>
            <button>View Tickets</button>
          </div>

        </section>
      </div>
    </main>
  );
}