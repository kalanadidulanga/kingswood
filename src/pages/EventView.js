import { useParams } from 'react-router-dom';
import './Contact.css';
import './EventView.css';
import Nav from '../components/commen/Nav';
import Footer from '../components/commen/Footer';
import EventHeader from '../components/commen/EventHeader';
import FilePath from '../components/commen/FilePath';
import Gallery from '../components/commen/Gallery';
import EventList from '../components/home/EventList';
import { eventContent } from '../constants/data.js';

export default function EventView() {
    // Get the id parameter from the URL
    const { id } = useParams();

    // Find the event that matches the id
    const event = eventContent.find(event => event.id === parseInt(id));

    // If no event is found, you might want to handle that case
    if (!event) {
        return (
            <>
                <Nav />
                <div className="container">
                    <h1>Event not found</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Nav />
            <EventHeader
                title={event.title}
                image={event.image}
                date={event.date}
            />
            <FilePath
                text={event.title}
                path="event-view"
            />

            <section className='event-view-1'>
                <div className='container'>
                    <div className='event-view-content'>
                        <p>{event.description}</p>
                    </div>
                </div>
            </section>

            <section className='event-view-2'>
                <div className='container'>
                    <div className='event-view-2-content'>
                        <Gallery images={event.images} />
                    </div>
                </div>
            </section>

            <div className='event-view-3'>
                <div className='container'>
                    <EventList eventItems={eventContent} />
                </div>
            </div>
            <Footer />
        </>
    );
}