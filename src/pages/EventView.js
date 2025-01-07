import { useParams } from 'react-router-dom';
import './Contact.css';
import './EventView.css';
import Nav from '../components/commen/Nav';
import Footer from '../components/commen/Footer';
import EventHeader from '../components/commen/EventHeader';
import FilePath from '../components/commen/FilePath';
import headerImage from '../images/theme/background.jpg';
import Gallery from '../components/commen/Gallery';
import EventList from '../components/home/EventList';
import { eventContent } from '../constants/data.js';
import useAxios from '../hooks/useAxios.js';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { getImageUrl } from '../utils/getImageUrl.js';

export default function EventView() {
    // Get the id parameter from the URL
    const { id } = useParams();
    const { fetch, loading } = useAxios();
    const [event, setEvent] = useState({});

    const [allEvents, setAllEvents] = useState([]);

    const fetchEvent = async () => {
        try {
            const response = await fetch({
                url: `/api/events?id=${id}`,
                method: "GET",
            });

            if (response.data?.success) {
                console.log(response.data.data.event);
                setEvent(response.data.data.event);
            } else {
                toast.error(response.data?.message || "Failed to fetch event");
            }
        } catch (err) {
            toast.error("An error occurred while fetching the event.");
        }
    };

    const fetchEvents = async () => {
        try {
            const { data: response } = await fetch({
                url: "/api/events",
                method: "GET",
            });

            if (response.success) {
                console.log(response.data.events);
                setAllEvents(response.data.events);
            }
        } catch (err) {
            console.error("Error fetching events:", err);
            toast.error("An error occurred while fetching events.");
        }
    };


    useEffect(() => {
        fetchEvent();
        fetchEvents();
    }, [id]);

    //funtion for get date from this "2025-01-09T18:30:00.000Z" -> "2025-01-09"
    const getDate = (date) => {
        return date.split('T')[0];
    }

    // Find the event that matches the id
    // const event = eventContent.find(event => event.id === parseInt(id));

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
                title={event?.title}
                {...(event?.images?.[0]?.url ? { image: getImageUrl(event.images[0].url) } : { image: headerImage })}
                date={event?.date ? getDate(event.date) : undefined}
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
                    <EventList eventItems={allEvents || []} />
                </div>
            </div>
            <Footer />
        </>
    );
}